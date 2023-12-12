"use client"
import { form } from "@/utils/form"
import { ErrorMessage, Formik } from "formik"
import * as Yup from "yup"
import styles from "./styles.module.css"
const Forms = () => {
  const initialValues = {
    email: "",
    fullName: "",
    address: "",
    phoneNumber: "",
    position: "Caregiver",
    otherPosition: "",
    employmentType: "Full-Time",
    driverLicense: "Yes",
    firstAidCPR: "Yes",
    availability: "Days",
    desiredHours: "",
    restrictions: "",
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
    fullName: Yup.string().required("Full Name is required"),
    // Add validation for other fields as needed
  })

  return (
    <div className={styles.forms}>
      <div className={styles.overlay}></div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setFieldValue, setFieldTouched }) => {
          form(values)
        }}
      >
        {({
          values,
          handleChange,
          handleBlur,
          touched,
          errors,
          handleSubmit,
          setFieldValue,
        }) => (
          <form className={styles.form} onSubmit={handleSubmit}>
            <div>
              <label>Email</label>
              <input
                type="Email"
                placeholder="email@email.com"
                onChange={(e) => setFieldValue("email", e.target.value)}
              />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div>
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Full name"
                onChange={(e) => setFieldValue("fullName", e.target.value)}
              />
            </div>
            <div>
              <label>Address</label>
              <input
                type="text"
                placeholder="Address"
                onChange={(e) => setFieldValue("address", e.target.value)}
              />
            </div>
            <div>
              <label>Phone Number</label>
              <input
                type="number"
                placeholder="Phone Number"
                onChange={(e) => setFieldValue("phoneNumber", e.target.value)}
              />
            </div>
            <div>
              <label>Position Applied For</label>
              <select
                onChange={(e) => setFieldValue("position", e.target.value)}
              >
                <option value="Caregiver">Caregiver</option>
                <option value="HCA">HCA</option>
                <option value="PSW">PSW</option>
                <option value="Nursing">Nursing</option>
                <option value="Admin">Admin</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label>If others Please Specify</label>
              <input
                type="text"
                placeholder="If others Please Specify"
                onChange={(e) => setFieldValue("otherPosition", e.target.value)}
              />
            </div>

            <div>
              <label>Type of Employment Desired</label>
              <select
                onChange={(e) =>
                  setFieldValue("employmentType", e.target.value)
                }
              >
                <option value="Full-time">Full-Time</option>
                <option value="Part-time">Part-Time</option>
                <option value="casual/uccasional">Casual/Occasional</option>
                <option value="contract">Contract</option>
              </select>
            </div>
            <div>
              <label>Driver’s License & Reliable Transportation</label>
              <select
                onChange={(e) => setFieldValue("driverLicense", e.target.value)}
              >
                <option value="yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div>
              <label>First Aid/CPR:</label>
              <select
                onChange={(e) => setFieldValue("firstAidCPR", e.target.value)}
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="update">Update</option>
              </select>
            </div>
            <div>
              <label>Availability</label>
              <select
                onChange={(e) => setFieldValue("availability", e.target.value)}
              >
                <option value="Days">Days</option>
                <option value="Afternoons">Afternoons</option>
                <option value="Update">Update</option>
                <option value="Midnights">Midnights</option>
                <option value="Weekends">Weekends</option>
                <option value="leep-Over">Sleep-Over</option>
              </select>
            </div>
            <div>
              <label>
                Can you tell me how many days per week and/or hours per day you
                are looking for?
              </label>
              <input
                type="text"
                onChange={(e) => setFieldValue("desiredHours", e.target.value)}
              />
            </div>
            <div>
              <label>
                Are there any restrictions in the number of hours, days per week
                or special consideration in scheduling?
              </label>
              <input
                type="text"
                onChange={(e) => setFieldValue("restrictions", e.target.value)}
              />
            </div>
            <button>Send</button>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default Forms
