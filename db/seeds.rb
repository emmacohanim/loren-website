
    # packages
#       belongs_to :service
#       has_many :subscriptions
#       has_many :users through subscriptions
#    subscriptions
#       belongs_to :user
#       belongs_to :package
#    users
#       has_many :subscriptions
#       has_many :packages, through :subscriptions
#    services
#       has_many :packages
#       has_many :users, through :packages 
# 


# services [{
#         type_of_service, 
#         description,
#         duration of session,
#         packages [
#           {
#                 number of sessions,
#                 price,
#                 frequency,
#                 additional info
#             },
#             


#         }
#     },
#     training {

#     },
#     competition training {

#     },

#     online training {},

#     motivational speaking {}

# }

mindfulness_coaching = Service.create(type_of_service: "Mindfulness Coaching", description: "HELP SUPPORT AND BRING MINDFULNESS INTO THE LIVES OF INDIVIDUALS, GROUP, FAMILY AND WORKPLACE TO IMPART MINDFULNESS IN EVERYDAY LIVES. USING VARIETY OF STRATEGIES AND SKILLS NEEDED TO BE MORE ACCOUNTABLE FOR GROWTH AND LEARN DIFFERENT PRACTICAL WAYS TO INCREASE SELF-AWARENESS TO FOCUS ON BEING IN THE PRESENT MOMENT AND WHAT MATTERS THE MOST. COUPLE AND GROUP RATES AVAILABLE UPON REQUEST", duration_of_session_in_minutes: 30)

personal_training = Service.create(type_of_service: "Personal Training", description: "CUSTOMIZED PERSONAL TRAINING PLAN WITH SPECIFIC GOALS THAT CATERS TO YOU. CREATE A LIFESTYLE TRAINING PROGRAM THAT CAN BE MAINTAINED. STRENGTH, CONDITIONING AND REHABILITATION PLANS", duration_of_session_in_minutes: 60)

competition_prep = Service.create(type_of_service: "Competition Prep", description: "CUSTOMIZED COMPETITION PREP PLANS WITH CARDIO AND NUTRITIONAL ASSISTANCE. PRE-CONTEST CHECK INS AND POST CONTEST ANALYSIS. INDIVIDUAL AND GROUP POSING PRESENTATION AND WORKSHOP IN PERSON OR ON ZOOM. FAT LOSS, BODY TRANSFORMATION, BODY SCAN AND ASSESSMENT CONSULTANT. CUSTOMIZED PLAN, NUTRITIONAL SUPPORT, CONTEST STAGE READY, POSING (see below for posing rates)")

posing = Service.create(type_of_service: "Competition Posing", description: "POSING SESSION(S) CUSTOMIZED TO MEET YOUR NEEDS. AVAILABLE IN PERSON OR VIA ZOOM")

online_training = Service.create(type_of_service: "Online Training",description: "ENJOY THE FLEXIBILITY OF AN ONLINE TRAINER, CUSTOMIZED WORKOUT PLAN WITH WEEKLY ACCOUNTABILITY. MONTHLY-RECURRING OPTION ALSO INCLUDES: WEEKLY SCHEDULE, 1:1 VIDEO SESSION, DAILY OR WEEKLY FEEDBACKS AND ACCOUNTABILITY, AND PERSONALIZED NUTRITIONAL ASSISTANCE PLAN")

motivational_speaking = Service.create(type_of_service: "Motivational Speaking", description: "AS A MOTIVATIONAL SPEAKER AND PRESENTER, LOREN USES HIS EXPERIENCES IN THE NURSING, HEALTH, WELLNESS, AND FITNESS INDUSTRIES TO CONNECT WITH HIS AUDIENCE. LOREN HAS BEEN SPEAKING IN FRONT OF AUDIENCES SINCE THE AGE OF 10 IN ENGLISH, SIGN LANGAUGE, AND ASL (AMERICAN SIGN LANGUAGE). FEE VARIES BASED ON ENGAGEMENT")

mindfulness_package_1 = Package.create(number_of_sessions: 1, price: 50, service_id: mindfulness_coaching.id)
mindfulness_package_2 = Package.create(number_of_sessions: 4, price: 185, frequency: "1x/week", service_id: mindfulness_coaching.id)
mindfulness_package_3 = Package.create(number_of_sessions: 5, price: 200, additional_info: "Must be 5 days in a row", service_id: mindfulness_coaching.id)
mindfulness_package_4 = Package.create(number_of_sessions: 8, price: 350, frequency: "2x/week", service_id: mindfulness_coaching.id)
mindfulness_package_5 = Package.create(number_of_sessions: 24, price: 960, frequency: "2x/week", additional_info: "Must use within 3 months", service_id: mindfulness_coaching.id)

personal_training_package_1 = Package.create(number_of_sessions: 1, price: 70, service_id: personal_training.id, additional_info: "Price does not inlcude any applicable assessment fee(s)")
personal_training_package_2 = Package.create(number_of_sessions: 2, price: 120, service_id: personal_training.id)
personal_training_package_3 = Package.create(number_of_sessions: 4, price: 200, service_id: personal_training.id)
personal_training_package_4 = Package.create(number_of_sessions: 8, price: 350, service_id: personal_training.id)
personal_training_package_5 = Package.create(number_of_sessions: 12, price: 480, service_id: personal_training.id)
personal_training_package_6 = Package.create(number_of_sessions: 16, price: 600, service_id: personal_training.id)

competition_prep_package_1 = Package.create(price: 1200, service_id: competition_prep.id, additional_info: "12-week customized program")
competition_prep_package_2 = Package.create(price: 1600, service_id: competition_prep.id, additional_info: "16-week customized program")
competition_prep_package_3 = Package.create(price: 2400, service_id:competition_prep.id, additional_info: "24-week customized program")
competition_prep_package_4 = Package.create(price: 700, service_id: competition_prep.id, additional_info: "12-week customized program (off season)")

posing_package_1 = Package.create(number_of_sessions: 1, price: 40, service_id: posing.id)
posing_package_2 = Package.create(number_of_sessions: 4, price: 150, service_id: posing.id)
posing_package_3 = Package.create(number_of_sessions: 8, price: 280, service_id: posing.id)
posing_package_4 = Package.create(number_of_sessions: 12, price: 384, service_id: posing.id)

online_training_package_1 = Package.create(service_id: online_training.id, price: 200, additional_info: "1-month prepaid" )
online_training_package_2 = Package.create(service_id: online_training.id, price: 375, additional_info: "2-months prepaid")
online_training_package_3 = Package.create(service_id: online_training.id, price: 550, additional_info: "3-months prepaid")
online_training_monthly_recurring = Package.create(service_id: online_training.id, price: 225, additional_info: "monthly subscription (recurring rate)" )






# motivational_speaking = Service.create(type: "", rate_base:, rate_avg:, rate_additional:, description: "", duration_of_session_in_minutes:)