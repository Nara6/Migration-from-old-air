<template>
  <div class="contain">
    
    <Bartitle  title="FREQUENTLY ASKED QUESTIONS"/>
    <div id="word">_Question_</div>
    <div class="search_con">
           <input type="text" placeholder="Type your question here" class="input_comment">
            <button class="btn btn-outline-secondary submitbtn" type="button">Submit</button>
    </div>
   
    <div class="question">
      <div class="left">
        <button class="tablinks" @click="openCity(event, '1')" id="defaultOpen">
          WHAT TO DO IF YOU'RE SICK
        </button>
        <button class="tablinks" @click="openCity(event, '2')">
          HOW COVID-19 VACCINES WORK
        </button>
        <button class="tablinks" @click="openCity(event, '3')">
          HOW SAFE ARE THE COVID-19 VACCINES
        </button>
        <button class="tablinks" @click="openCity(event, '4')">
          TYPES OF COVID-19 VACCINES
        </button>
        <button class="tablinks" @click="openCity(event, '5')">
          GETTING THE COVID-19 VACCINE
        </button>
      </div>

      <div id="1" class="tabcontent">
        <div class="accordion">
          <div class="accordion-item">
            <button id="accordion-button-1" aria-expanded="false">
              <span class="accordion-title"
                >WHAT IS CORONAVIRUS (COVID-19) AND HOW DOES IT SPREAD?</span
              >
              <span class="icon" aria-hidden="true"></span>
            </button>
            <div class="accordion-content">
              <p>
                The Coronavirus (COVID-19) is a new respiratory illness first
                identified during an investigation into an outbreak in Wuhan,
                China, but has now spread to other parts of the world, including
                the United States. The virus that causes COVID-19 is called
                SARS-CoV-2 and is spread between people who are in close contact
                with each other (within about six feet), mostly through
                respiratory droplets produced when an infected person coughs or
                sneezes. People are thought to be most contagious when they are
                the sickest (symptomatic); however, growing evidence suggests
                that COVID-19 may be spread by people before they start showing
                symptoms (pre-symptomatic) or by people who have the virus but
                never show symptoms (asymptomatic). The virus can also live on
                certain surfaces for a period of time which can make it possible
                for people to get COVID-19 if they touch a contaminated object
                and then touch their mouth, nose, or eyes. That is why it is
                important to take preventive steps to avoid getting sick.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion">
          <div class="accordion-item">
            <button id="accordion-button-1" aria-expanded="false">
              <span class="accordion-title">WHAT ARE THE SYMPTOMS?</span>
              <span class="icon" aria-hidden="true"></span>
            </button>
            <div class="accordion-content">
              <p>
                Some people who get COVID-19 may be asymptomatic but for those
                experiencing symptoms, the following, varying from mild to
                severe, may appear 2-14 days after exposure:
                <br />Fever <br />
                Cough <br />
                Shortness of breath <br />
                In addition, other symptoms can include: <br /><br />

                😷Fatigue (tiredness)<br />
                😷Body aches<br />
                😷Chills<br />
                😷Headache<br />
                😷Diarrhea<br />
                😷Sore throat<br />
                😷Nasal congestion<br />
                😷Loss of smell<br />
                😷Loss of taste <br /><br />
                This Self-Checker tool from the CDC can help you make decisions
                and seek appropriate medical care.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion">
          <div class="accordion-item">
            <button id="accordion-button-1" aria-expanded="false">
              <span class="accordion-title">WHAT DO I DO IF I FEEL SICK?</span>
              <span class="icon" aria-hidden="true"></span>
            </button>
            <div class="accordion-content">
              <p>
                Per the Centers for Disease Control and Prevention (CDC)
                recommendations, if you are sick with COVID-19 or start
                experiencing its symptoms, follow these steps:
                <br /><b>Stay home:</b>Most people with COVID-19 get a mild form
                of the illness that may include fever, coughing, and other
                symptoms listed above. People with mild symptoms can usually get
                better at home without medical care. Do not leave your home,
                except to get medical care. Do not visit public areas. <br /><b
                  >Stay in touch with your doctor:</b
                >Call your doctor before going to their office. If you do not
                have a regular doctor, call your local health department or
                hospital to find out where you can go to seek medical care. Be
                sure to get care immediately if you have trouble breathing,
                since that is a more serious symptom, or if you have any
                emergency warning signs, or think it is an emergency. <br /><b
                  >Avoid public transportation:</b
                >
                Avoid using public transportation, ride sharing, or taxis.
                <br /><b>Stay away from others:</b>Separate yourself from other
                people or pets in your home and stay in a specific “sick room”
                and use a separate bathroom, if possible. Clean high-touch areas
                in your “sick room” and bathroom and let someone else clean
                other areas of the house. <br /><b
                  >Cover your coughs and sneezes:
                </b>
                Cover your cough or sneezes with a tissue and throw away the
                tissue in a lined trash. Immediately wash your hands for at
                least 20 seconds with soap and water or use hand sanitizer that
                has at least 60% alcohol if soap and water are not available.
                <br /><b>Clean your hands often: </b>Wash your hands with soap
                and water often. Only use hand sanitizer when soap and water are
                not available. <br /><b>Avoid sharing personal items: </b>Do not
                share dishes, utensils, glasses, cups, towels or bedding when
                you are sick. Always make sure to wash your household items with
                soap and water. <br /><b>Wear a cloth mask or covering: </b>If
                you are sick and you must be around others even at home, wear a
                cloth mask or face covering over your nose and mouth. <br /><b
                  >Monitor your symptoms: </b
                >Common symptoms of COVID-19 include fever and cough. Trouble
                breathing is a more serious symptom that means you should get
                medical attention immediately. Learn more about what to do if
                you are sick or put in home isolation. While clinical trials are
                underway to help identify an effective treatment, there is
                currently no specific antiviral treatment recommended for
                COVID-19. People with COVID-19 can seek medical care to help
                relieve symptoms.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion">
          <div class="accordion-item">
            <button id="accordion-button-1" aria-expanded="false">
              <span class="accordion-title">WHO IS AT HIGHER RISK?</span>
              <span class="icon" aria-hidden="true"></span>
            </button>
            <div class="accordion-content">
              <p>
                Anyone, no matter their age, can become sick with COVID-19.
                However, older adults (over 65 years of age) and people with
                compromised immune systems or chronic conditions, such as
                diabetes and lung disease, may be at higher risk for developing
                more serious symptoms or complications from COVID-19. If you or
                your loved ones are at higher risk, stay home as much as
                possible, consult with your doctor about additional steps to
                take to protect yourself and follow these prevention measures to
                decrease your risk of getting sick with COVID-19:
                <br /><br />Ensure you have enough food at home and that your
                prescriptions are refilled and up to date. <br />Avoid large
                crowds. <br />Avoid nonessential travel. <br />Stay at home as
                much as possible.
              </p>
            </div>
          </div>
        </div>
      </div>

       <div id="2" class="tabcontent">
        <div class="accordion">
          <div class="accordion-item">
            <button id="accordion-button-1" >
              <span class="accordion-title"
                >HOW DO THE COVID-19 VACCINES WORK?</span
              >
              <span class="icon" aria-hidden="true"></span>
            </button>
            <div class="accordion-content">
              <p>
                The COVID-19 vaccines are a type of medicine that work by
                teaching our body how to recognize and fight the virus that
                causes COVID-19. The COVID-19 vaccines will help protect us from
                getting COVID-19, becoming very sick with the virus, needing to
                be hospitalized, or dying from COVID-19.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion">
          <div class="accordion-item">
            <button id="accordion-button-1" aria-expanded="false">
              <span class="accordion-title"
                >WHY IS IT IMPORTANT TO GET A COVID-19 VACCINE?</span
              >
              <span class="icon" aria-hidden="true"></span>
            </button>
            <div class="accordion-content">
              <p>
                Getting vaccinated is a powerful tool that will help save lives
                and end the pandemic sooner. When more of us are vaccinated, the
                more we protect ourselves and our loved ones against COVID-19
                and other variants
              </p>
            </div>
          </div>
        </div>
        <div class="accordion">
          <div class="accordion-item">
            <button id="accordion-button-1" aria-expanded="false">
              <span class="accordion-title"
                >WHAT ARE THE COVID-19 VACCINES MADE OF?</span
              >
              <span class="icon" aria-hidden="true"></span>
            </button>
            <div class="accordion-content">
              <p>
                The Pfizer and the Moderna COVID-19 vaccines use messenger RNA
                also called mRNA. mRNA COVID-19 vaccines teach our body to
                recognize and fight the virus that causes COVID-19, protecting
                us from getting sick all together or getting too sick. mRNA does
                not interact or change our DNA and mRNA COVID-19 vaccines do not
                contain any live virus so you cannot get sick with COVID-19 from
                these vaccines. <br />
                <br />The Johnson and Johnson COVID-19 vaccine does not use
                messenger RNA, instead it uses a viral vector to create a strong
                immune response in our body that will recognize and fight the
                virus that causes COVID-19. Like messenger RNA vaccines, the
                viral vector in the Johnson & Johnson COVID-19 vaccine does not
                interact or change our DNA and does not contain any live virus
                so you cannot get sick with COVID-19 from this vaccine. <br />To
                learn more about the ingredients used in the COVID-19 vaccines,
                visit the CDC website
              </p>
            </div>
          </div>
        </div>
        <div class="accordion">
          <div class="accordion-item">
            <button id="accordion-button-1" aria-expanded="false">
              <span class="accordion-title"
                >DO THE COVID-19 VACCINES CONTAIN THE LIVE VIRUS THAT CAUSES
                COVID-19?</span
              >
              <span class="icon" aria-hidden="true"></span>
            </button>
            <div class="accordion-content">
              <p>
                TNo, the Pfizer, Moderna, and the Johnson & Johnson vaccines do
                not contain the live virus that causes COVID-19 which means
                these vaccines cannot give us COVID-19 and they cannot transmit
                the virus.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion">
          <div class="accordion-item">
            <button id="accordion-button-1" aria-expanded="false">
              <span class="accordion-title"
                >DO THE COVID-19 VACCINES CHANGE MY DNA?</span
              >
              <span class="icon" aria-hidden="true"></span>
            </button>
            <div class="accordion-content">
              <p>
                No, the mRNA in the Pfizer and Moderna COVID-19 vaccines and the
                viral vector in the Johnson & Jonhson vaccine do not interact or
                change our DNA. The mRNA and the viral vector act like “coaches”
                to teach our bodies how to fight the virus effectively.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion">
          <div class="accordion-item">
            <button id="accordion-button-1" aria-expanded="false">
              <span class="accordion-title"
                >WHAT IS A COVID-19 VACCINE BOOSTER?</span
              >
              <span class="icon" aria-hidden="true"></span>
            </button>
            <div class="accordion-content">
              <p>
                A vaccine booster is an additional vaccine given after the
                original vaccine dose(s) to maintain the same level of immunity
                for a longer period of time. The Pfizer COVID-19 booster being
                recommended is the same exact one as the first two doses. Public
                health officials have reviewed available data on the Pfizer
                COVID-19 vaccine and have determined that a COVID-19 vaccine
                booster is beneficial for certain populations. Because immunity
                from the initial vaccine dose(s) naturally starts to wear off, a
                vaccine booster will strengthen your immunity.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion">
          <div class="accordion-item">
            <button id="accordion-button-1" aria-expanded="false">
              <span class="accordion-title"
                >WHO IS ELIGIBLE TO GET A COVID-19 VACCINE BOOSTER?</span
              >
              <span class="icon" aria-hidden="true"></span>
            </button>
            <div class="accordion-content">
              <p>
                Currently, only certain populations who received both doses of
                their Pfizer COVID-19 vaccine at least 6 months ago are eligible
                for a COVID-19 booster shot.<br />
                💉Adults 65 years and older.<br />
                <br />💉Adults 18 years and older who have underlying medical
                conditions like cancer, kidney disease, severe respiratory
                illnesses, diabetes, heart disease, HIV, weakened immune system,
                and liver disease.<br />
                <br />💉Adults 18 years and older who work in high-risk settings
                like first responders, education staff, food and agricultural
                workers, manufacturing workers, corrections workers, U.S. Postal
                Service workers, public transit workers, grocery store
                workers.<br />
                <br />💉Adults 18 years and older who live in high-risk settings
                such as long-term and health care facilities, schools,
                correctional facilities, homeless shelters.<br />
                <br />As more data and information become available, additional
                populations will be considered to receive a COVID-19 vaccine
                booster in the future. The Pfizer, Moderna, and the Johnson &
                Johnson vaccines continue to be effective and the best way to
                protect you and your family against the COVID-19 virus and its
                variants.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="3" class="tabcontent">
        <div class="accordion">
          <div class="accordion-item">
            <button id="accordion-button-1" >
              <span class="accordion-title"
                >HOW DO I KNOW THE COVID-19 VACCINES ARE SAFE AND
                EFFECTIVE?</span
              >
              <span class="icon" aria-hidden="true"></span>
            </button>
            <div class="accordion-content">
              <p>
                Both the US Federal Food and Drug Administration (FDA) and the
                Centers for Disease Control and Prevention (CDC) ensure that the
                authorized COVID-19 vaccines for emergency use, and those fully
                approved are safe and effective for our community. Because
                vaccines are given to millions of people to prevent serious
                diseases, they are held to very high safety standards. <br />The
                COVID-19 vaccines undergo rigorous testing that includes
                vaccinating tens of thousands of people who participate in
                clinical studies to generate the information needed for the FDA
                to determine their safety and how well they work. After the FDA
                authorizes a COVID-19 vaccine for emergency use, the CDC then
                reviews the COVID-19 vaccine available information before giving
                recommendations for public use. Even after the COVID-19 vaccines
                are fully approved, as is the case for the Pfizer vaccine, the
                FDA continues to monitor public safety.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion">
          <div class="accordion-item">
            <button id="accordion-button-1" aria-expanded="false">
              <span class="accordion-title"
                >WHAT ARE THE COMMON SIDE EFFECTS OF THE COVID-19
                VACCINES?</span
              >
              <span class="icon" aria-hidden="true"></span>
            </button>
            <div class="accordion-content">
              <p>
                The common side effects among adults, teens, and children
                eligible for a COVID-19 vaccine include:
                <br />🤒Pain, redness, and swelling in the arm where you got the
                vaccine <br />🤒Fatigue or tiredness <br />🤒Headache
                <br />🤒Muscle aches or pains <br />🤒Chills <br />🤒Fever
                <br />🤒Nausea <br />It is normal for these side effects to last
                for a few days after receiving either of the COVID-19 vaccines.
                These side effects mean that the vaccine is working.<br />
                <br />Some people might not present any side effects, which is
                normal as well. The COVID-19 vaccine is still building the
                immunity we need to recognize and fight COVID-19 even if you
                don’t show side effects.<br />
                <br />For the Pfizer and the Moderna vaccine that require a
                second dose, some people may feel side effects for a few days
                after either or both doses.<br />
                <br />Similar side effects have been reported for the Johnson &
                Johnson vaccine, and like the Pfizer and Moderna COVID-19
                vaccines, these side effects usually start within a day or two
                of getting the vaccine, but they go away in a few days.<br />
                <br />If you have questions about symptoms or any other side
                effects after you receive a COVID-19 vaccine, ask your health
                care provider. You can also download v-safe in your smartphone.
                V-safe is a tool that checks in on you after your COVID-19
                vaccination.<br />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="4" class="tabcontent">
        <div class="accordion">
          <div class="accordion-item">
            <button id="accordion-button-1" >
              <span class="accordion-title"
                >WHAT ARE THE COVID-19 VACCINES CURRENTLY AVAILABLE?</span
              >
              <span class="icon" aria-hidden="true"></span>
            </button>
            <div class="accordion-content">
              <p>
                Currently, there are two COVID-19 vaccines that have received
                authorization for emergency use, and one that has been fully
                approved by the US Federal Food and Drug Administration (FDA).
                These are: <br /><br />The Pfizer-BioNTech COVID-19 vaccine,
                fully approved on August 23, 2021. This vaccine is often
                referred to as the “Pfizer COVID-19 vaccine.” <br /><br />The
                Moderna COVID-19 vaccine, approved for emergency use on December
                18, 2020. <br /><br />The Johnson & Johson COVID-19 vaccine,
                approved for emergency use on February 27, 2021.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion">
          <div class="accordion-item">
            <button id="accordion-button-1" aria-expanded="false">
              <span class="accordion-title"
                >WHAT TO KNOW ABOUT THE FDA APPROVAL OF THE PFIZER
                VACCINE?</span
              >
              <span class="icon" aria-hidden="true"></span>
            </button>
            <div class="accordion-content">
              <p>
                The US Federal Food and Drug Administration (FDA) has granted
                Pfizer full approval for its COVID-19 vaccine for people aged 16
                and older. This means that the Pfizer COVID-19 vaccine underwent
                FDA’s standard process for reviewing the quality, safety, and
                effectiveness. The additional information Pfizer presented to
                the FDA to receive full-approval builds on the extensive data
                and information previously submitted that supported its
                authorization for emergency use.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion">
          <div class="accordion-item">
            <button id="accordion-button-1">
              <span class="accordion-title"
                >CAN I CHOOSE WHICH COVID-19 VACCINE TO GET?</span
              >
              <span class="icon" aria-hidden="true"></span>
            </button>
            <div class="accordion-content">
              <p>
                Once we have access to a COVID-19 vaccine, it is important we
                get the vaccine that is available to us. However, some COVID-19
                vaccination sites do allow you to choose which vaccine to get
                based on availability. Ask your COVID-19 vaccine provider about
                your options.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion">
          <div class="accordion-item">
            <button id="accordion-button-1" aria-expanded="false">
              <span class="accordion-title"
                >HOW DOES MODERNA’S VACCINE COMPARE TO PFIZER’S?</span
              >
              <span class="icon" aria-hidden="true"></span>
            </button>
            <div class="accordion-content">
              <p>
                Both vaccines use the messenger RNA (mRNA) technology which will
                teach our body to fight a COVID-19 infection in two ways. First,
                by recognizing the virus, and second, by fighting the virus.
                Both the Pfizer and Moderna vaccines offer excellent protection
                against COVID-19.
                <br /><br />The Pfizer COVID-19 vaccine received full approval
                for people 16 and older by the US Federal Food and Drug
                Administration (FDA) on August 23, 2021. The Pfizer vaccine
                continues to be available under emergency use authorization for
                people 12 through 15. <br /><br />Moderna also continues to be
                available under emergency use authorization for people 18 and
                older. <br /><br />Both the Moderna and the Pfizer vaccines
                require two vaccine doses. The interval between Moderna doses is
                28 days, and the interval for the Pfizer doses is 21 days.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion">
          <div class="accordion-item">
            <button id="accordion-button-1" >
              <span class="accordion-title"
                >WHY DO I NEED A SECOND DOSE OF THE PFIZER AND THE MODERNA
                COVID-19 VACCINES?</span
              >
              <span class="icon" aria-hidden="true"></span>
            </button>
            <div class="accordion-content">
              <p>
                Both the Pfizer and Moderna vaccines require two doses for them
                to be most effective. The first dose helps our body recognize
                the virus and gets our immune system ready, while the second
                dose strengthens that immune response. Our immunity will be much
                higher after the second dose because our body will be more
                prepared to fight COVID-19. It’s important to keep your
                appointment for the second dose to be fully protected against
                COVID-19.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion">
          <div class="accordion-item">
            <button id="accordion-button-1" aria-expanded="false">
              <span class="accordion-title"
                >WHAT DO I NEED TO KNOW ABOUT THE JOHNSON & JOHNSON COVID-19
                VACCINE?</span
              >
              <span class="icon" aria-hidden="true"></span>
            </button>
            <div class="accordion-content">
              <p>
                The Johnson & Johnson vaccine is a one dose vaccine that works
                similarly to the Pfizer and Moderna vaccines. The Johnson &
                Johnson COVID-19 vaccine is a viral vector vaccine that creates
                a strong immune response that will help our body fight the virus
                that causes COVID-19. It meets the same safety, quality, and
                effectiveness standards of the US Federal Food and Drug
                Administration (FDA) and it received authorization for emergency
                use by the FDA on February 27, 2021. Just like the Moderna and
                Pfizer vaccines, the Johnson & Johnson vaccine is very effective
                at preventing severe illnesses, hospitalizations, and death due
                to COVID-19. It’s important to note that you cannot get COVID-19
                from any of the COVID-19 vaccines.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion">
          <div class="accordion-item">
            <button id="accordion-button-1" Caria-expanded="false">
              <span class="accordion-title"
                >WHAT DO WE KNOW ABOUT THE JOHNSON & JOHNSON VACCINE AND
                POSSIBLE HEALTH EFFECTS?</span
              >
              <span class="icon" aria-hidden="true"></span>
            </button>
            <div class="accordion-content">
              <p>
                The US Federal Food and Drug Administration (FDA) and the
                Centers for Disease Control and Prevention (CDC) issued a
                warning for the Johnson & Johnson vaccine about a small risk of
                developing a rare condition which involves blood clots with low
                platelets. Most reports of this rare but serious condition have
                been in adult women younger than 50. After a detailed
                examination, the FDA and the CDC determined that the benefits of
                the Johnson & Johnson vaccine outweigh known and potential
                risks. However, it is important for women younger than 50 to be
                aware of this increased risk and know that there are other
                available COVID-19 vaccine options for which this risk has not
                been seen. <br /><br />The CDC and the FDA are also monitoring
                reports of Guillain–Barré Syndrome in people whole received the
                Johnson & Johnson vaccine, a rare disorder that affects our
                nerves, resulting in muscle weakness or paralysis. Most reports
                have been seen in men, many 50 of age and older. Most people
                recovered within two weeks, but some have permanent nerve
                damage. Health experts still consider the Johnson & Johnson
                vaccine to be a safe and effective way to protect yourself
                against COVID-19. <br /><br />You can always reach out to your
                doctor or healthcare provider if you have questions about any of
                the COVID-19 vaccines, including the Pfizer or the Moderna
                vaccines.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion">
          <div class="accordion-item">
            <button id="accordion-button-1" aria-expanded="false">
              <span class="accordion-title"
                >CAN I TAKE THE PFIZER DOSE AND THEN LATER THE MODERNA OR OTHER
                COVID-19 VACCINE IN THE SECOND ROUND?</span
              >
              <span class="icon" aria-hidden="true"></span>
            </button>
            <div class="accordion-content">
              <p>
                No, the current recommendation is to take two doses of the same
                vaccine provider. For example, if you receive the Moderna
                COVID-19 vaccine for the first dose, make sure to receive the
                Moderna COVID-19 vaccine for the second dose. It is important to
                stick with one vaccine from one provider. Remember to save the
                name of the COVID-19 vaccine you receive for when you get the
                second dose. Ask your health care provider who is administering
                the vaccine to give you a record or a vaccine card. If you
                receive the Johnson & Johnson COVID-19 vaccine, this is a one
                dose vaccine, so you do not need to return for a second dose.
                After one dose of the Johnson & Johnson vaccine, you will be
                fully vaccinated against COVID-19.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="5" class="tabcontent">
        <div class="accordion">
          <div class="accordion-item">
            <button id="accordion-button-1" Caria-expanded="false">
              <span class="accordion-title"
                >WHERE CAN I GET ONE OF THE COVID-19 VACCINES?</span
              >
              <span class="icon" aria-hidden="true"></span>
            </button>
            <div class="accordion-content">
              <p>
                There are several ways to find vaccine providers in your area,
                the best way is to visit Vaccines.gov or call 1-800-232-0233
                (TTY 888-720-7489). Vaccines.gov a free online service where you
                can search for pharmacies and providers that offer vaccination
                near you. Information about where COVID-19 vaccines are
                available is updated daily.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion">
          <div class="accordion-item">
            <button id="accordion-button-1"  Caria-expanded="false">
              <span class="accordion-title"
                >DO I NEED HEALTH INSURANCE TO RECEIVE ONE OF THE COVID-19
                VACCINES?</span
              >
              <span class="icon" aria-hidden="true"></span>
            </button>
            <div class="accordion-content">
              <p>
                No, the COVID-19 vaccines are free for everyone in the United
                States whether you have insurance or not. However, your
                insurance company or state’s relief fund will be billed a fee
                for the vaccine administration. Be sure to bring your insurance
                card with you if you have health insurance. If you do not have
                health insurance, you can still get the vaccine.
              </p>
            </div>
          </div>
        </div>
      </div> 

    </div>

  </div>
</template>
<script>

import Bartitle from '../components/Bartitle.vue'




export default {
  name: "HomePage",
  components:{
    Bartitle
  },
  mounted() {
    const items = document.querySelectorAll(".accordion button");

    function toggleAccordion() {
      const itemToggle = this.getAttribute("aria-expanded");

      for (let i = 0; i < items.length; i++) {
        items[i].setAttribute("aria-expanded", "false");
      }

      if (itemToggle == "false") {
        this.setAttribute("aria-expanded", "true");
      }
    }

    items.forEach((item) => item.addEventListener("click", toggleAccordion));

    document.getElementById("defaultOpen").click();
  },
  methods: {
    openCity(evt, cityName) {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      document.getElementById(cityName).style.display = "block";
      evt.currentTarget.className += " active";
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inria+Sans&display=swap");
body {
  background-color: rgb(255, 255, 255);
  width: 100%;
  height: auto;
}
b {
  font-weight: bold;
}
.contain {
  padding: 0;
  width: 100%;
  height: auto;
  background-color: white;
  margin-bottom: 4vh;
  
}
.header {
  text-align: center;
  width: 100%;
  height: auto;
  background: linear-gradient(273deg, #2a81ea 0%, rgb(10, 49, 98) 100%);
  overflow: visible;
  color: white;
  font-weight: bold;
  font-family: "Inria Sans", sans-serif;
  font-size: 44px;
  padding-top: 40px;
}
#word {
  margin-top: 40px;
  white-space: pre;
  font-weight: bold;
  font-style: normal;
  font-family: "Inria Sans";
  color: #2a81ea;
  font-size: 30px;
  letter-spacing: 0px;
  line-height: 1.2;
  text-align: center;
}
.search_con {
  width: 100%;
  text-align: center;
  justify-content: center;
  display: flex;
  margin-top: 20px ;
}
.input_comment{
  width: 70%;
  height: 7vh;
  border-radius:15px 0px 0px 15px;
  padding: 10px;
  border: 2px solid #2a81ea;
}
.submitbtn{
  height: 7vh;
  background-color: #2a81ea;
  overflow: visible;
  border: 1px solid #2a81ea;
  border-radius: 0px 15px 15px 0px;
  font-weight: 700;
  font-style: normal;
  font-family: "Inria Sans", sans-serif;
  color: white;
}
.post {
  width: 80px;
  height: 36px;
  background-color: #2a81ea;
  overflow: visible;
  border: 1px solid #2a81ea;
  border-radius: 15px;
  font-weight: 700;
  font-style: normal;
  font-family: "Inria Sans", sans-serif;
  color: white;
}
.post:focus {
  background-color: #1b57a0;
}
.question {
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 30px;
  justify-content: center;
}
.left {
  width: 25%;
  height: 500px;
  border: 2px solid #2a81ea;
  margin: 10px;
  display: flex;
  flex-direction: column;
}
.tabcontent {
  width: 65%;
  height: auto;
  border: 2px solid #2a81ea;
  margin: 10px;
  display: flex;
  flex-direction: column;
}
.tablinks {
 
  width: 100%;
  height: 52px;
  background-color: #fbfbfb;
  overflow: visible;
  border-radius: 5px;
  white-space: pre;
  font-weight: 700;
  font-style: normal;
  font-family: "Inria Sans", sans-serif;
  color: #000000;
  font-size: 15px;
  text-align: center;
  border: 0px;
}
.tablinks:focus {
  background-color: #2a81ea;
  color: white;
}
.questionBox {
  margin: 10px;
  box-sizing: border-box;
  width: 930px;
  height: 58px;
  background-color: #ffffff;
  overflow: visible;
  border-bottom: 1px solid #2a81ea;
  white-space: pre;
  font-weight: 700;
  font-style: normal;
  font-family: "Inria Sans", sans-serif;
  color: #000000;
  font-size: 32px;
  padding-left: 50px;
  display: flex;
  justify-content: space-between;
}
.plus {
  background-color: #2a81ea;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  margin-top: 10px;
  color: white;
  border: 0px;
}
.accordion .accordion-item {
  border-bottom: 1px solid #e5e5e5;
}

.accordion .accordion-item button[aria-expanded="true"] {
  border-bottom: 1px solid #2a81ea;
}

.accordion button {
  position: relative;
  display: flex;
  text-align: left;
  width: 100%;
  padding: 1em 0;
  color: #2a81ea;
  font-size: 1.15rem;
  font-weight: 400;
  border: none;
  background: none;
  outline: none;
}

.accordion button:hover,
.accordion button:focus {
  cursor: pointer;
  color: #2a81ea;
}

.accordion button:hover::after,
.accordion button:focus::after {
  cursor: pointer;
  color: #2a81ea;
  border: 1px solid #2a81ea;
}

.accordion button .accordion-title {
  padding-left: 20px;
  color: rgb(0, 0, 0);
  font-weight: bold;
  font-family: "Inria Sans";
  font-size: 15px;
  width: 93%;
}

.accordion button .icon {
  display: inline-block;
  position: absolute;
  top: 7px;
  right: 0;
  width: 22px;
  height: 22px;
  border: 2px solid;
  border-radius: 22px;
  margin: 15px;
}

.accordion button .icon::before {
  display: block;
  position: absolute;
  content: "";
  top: 8px;
  left: 4px;
  width: 11px;
  height: 2px;
  background: currentColor;
}
.accordion button .icon::after {
  display: block;
  position: absolute;
  content: "";
  top: 4px;
  left: 8px;
  width: 2px;
  height: 11px;
  background: currentColor;
}

.accordion button[aria-expanded="true"] {
  color: #2a81ea;
}
.accordion button[aria-expanded="true"] .icon::after {
  width: 0;
}
.accordion button[aria-expanded="true"] + .accordion-content {
  opacity: 1;
  max-height: 15em;
  transition: all 200ms linear;
  will-change: opacity, max-height;
  margin-left: 30px;
  overflow: scroll;
}
.accordion .accordion-content {
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  transition: opacity 200ms linear, max-height 200ms linear;
  will-change: opacity, max-height;
}
.accordion .accordion-content p {
  font-size: 1rem;
  font-weight: 300;
  margin: 2em 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
a:link {
  text-decoration: none;
}
a:hover {
  margin-top: 15px;
  background-color: #2a81ea;
  overflow: visible;
  border-radius: 5px;
  white-space: pre;
  font-weight: 700;
  font-style: normal;
  font-family: "Inria Sans", sans-serif;
  color: #000000;
  font-size: 32px;
  text-align: center;
  border: 0px;
}

a:active {
  margin-top: 15px;
  background-color: #2a81ea;
  overflow: visible;
  border-radius: 5px;
  white-space: pre;
  font-weight: 700;
  font-style: normal;
  font-family: "Inria Sans", sans-serif;
  color: #000000;
  font-size: 32px;
  text-align: center;
  border: 0px;
}

.tab {
  float: left;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
  width: 30%;
  height: 300px;
}

/* Style the buttons inside the tab */
.tab button {
  display: block;
  background-color: inherit;
  color: black;
  padding: 22px 16px;
  width: 100%;
  border: none;
  outline: none;
  text-align: left;
  cursor: pointer;
  transition: 0.3s;
  font-size: 17px;
}

/* Change background color of buttons on hover */
.tab button:hover {
  background-color: #ddd;
}

/* Create an active/current "tab button" class */
.tab button.active {
  background-color: #ccc;
}
p {
  text-align: left;
}
/* Style the tab content */
</style>
