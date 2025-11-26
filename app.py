# app.py
import streamlit as st
import pandas as pd
import datetime
import random
import os

# --- Config ---
DATA_FILE = "symptoms_log.csv"
TITLE = "Arogya Assist — Symptom Pre-Screening Bot"

# Ensure data file exists
if not os.path.exists(DATA_FILE):
    df_init = pd.DataFrame(columns=["timestamp","fever","cough","sore_throat","headache","fatigue","duration_days","outcome","ancient_tips_opted"])
    df_init.to_csv(DATA_FILE, index=False)

# --- Ancient wellness tips ---
ancient_wellness = {
    "general": [
        "Sip warm ginger-honey tea (non-medical comfort).",
        "Take steam inhalation with plain hot water (cover head with towel).",
        "Drink warm water frequently.",
        "Turmeric milk before bed (comforting beverage).",
        "Warm saline gargle for throat comfort."
    ],
    "winter": [
        "Have warm soups and ginger tea.",
        "Avoid cold drinks and prefer warm water."
    ],
    "summer": [
        "Drink tender coconut water or buttermilk.",
        "Prefer light, easily digestible meals."
    ],
    "rainy": [
        "Avoid street food; prefer boiled/clean water.",
        "Keep feet dry and wear appropriate footwear."
    ]
}

def random_ancient_tip(season="general"):
    tips = ancient_wellness.get(season, ancient_wellness["general"])
    return random.choice(tips)

# --- Symptom analysis ---
def analyze_symptoms(fever, cough, sore_throat, headache, fatigue, duration_days):
    score = 0
    score += 2 if fever else 0
    score += 1 if cough else 0
    score += 1 if sore_throat else 0
    score += 1 if headache else 0
    score += 1 if fatigue else 0
    if duration_days >= 3:
        score += 1

    if fever and duration_days >= 3:
        return "⚠️ Please consult a medical professional (See Doctor)."
    if score >= 4:
        return "⚠️ Moderate signs: Rest, hydrate, monitor closely; consult doctor if no improvement."
    if score >= 2:
        return "✅ Mild signs: Rest and hydration recommended. Monitor symptoms."
    return "✅ No significant symptoms detected; maintain hygiene and rest."

# --- Streamlit UI ---
st.set_page_config(page_title="Arogya Assist", layout="wide")
st.title(TITLE)
st.markdown("**Note:** This bot provides only general wellness advice. It is NOT a diagnosis tool. Consult a doctor for medical concerns.")

# Symptom input form
with st.form("symptom_form"):
    st.subheader("Quick Symptom Check")
    fever = st.checkbox("Fever")
    cough = st.checkbox("Cough")
    sore_throat = st.checkbox("Sore throat")
    headache = st.checkbox("Headache")
    fatigue = st.checkbox("Fatigue / Low energy")
    duration_days = st.slider("Duration of symptoms (days)", 0, 30, 1)
    submitted = st.form_submit_button("Get Recommendation")

if submitted:
    outcome = analyze_symptoms(fever, cough, sore_throat, headache, fatigue, duration_days)
    st.success(outcome)

    # Ancient wellness tips
    if st.checkbox("Would you like ancient wellness suggestions?"):
        month = datetime.datetime.now().month
        season = "general"
        if month in [12,1,2]: season = "winter"
        elif month in [3,4,5]: season = "summer"
        elif month in [6,7,8,9]: season = "rainy"
        tip = random_ancient_tip(season)
        st.info(f"🌿 Ancient wellness suggestion: {tip}")
        ancient_opted = True
    else:
        ancient_opted = False

    # Log anonymous data
    row = {
        "timestamp": datetime.datetime.now().isoformat(),
        "fever": int(fever),
        "cough": int(cough),
        "sore_throat": int(sore_throat),
        "headache": int(headache),
        "fatigue": int(fatigue),
        "duration_days": int(duration_days),
        "outcome": outcome,
        "ancient_tips_opted": int(ancient_opted)
    }
    df = pd.read_csv(DATA_FILE)
    df = pd.concat([df, pd.DataFrame([row])], ignore_index=True)
    df.to_csv(DATA_FILE, index=False)

# Admin dashboard
st.markdown("---")
st.subheader("Admin Dashboard (Demo)")
if st.checkbox("Show symptom analytics"):
    df = pd.read_csv(DATA_FILE)
    if df.empty:
        st.write("No data yet.")
    else:
        st.write("Total responses:", len(df))
        counts = {
            "fever": int(df['fever'].sum()),
            "cough": int(df['cough'].sum()),
            "sore_throat": int(df['sore_throat'].sum()),
            "headache": int(df['headache'].sum()),
            "fatigue": int(df['fatigue'].sum())
        }
        st.write("Symptom counts:", counts)
        top = sorted(counts.items(), key=lambda x: x[1], reverse=True)
        st.write("Top symptoms:", top[:3])
        st.download_button("Download CSV", DATA_FILE)
        st.markdown("**Suggested Wellness Tip of the Week:**")
        st.info(random_ancient_tip())