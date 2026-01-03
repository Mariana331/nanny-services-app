import css from "./Appointment.module.css";

export default function Appointment() {
  return (
    <div className={css.appointment}>
      <button className={css.btn_close} aria-label="Close modal">
        <svg width={19} height={19} className={css.close_icon}>
          <use href="/sprite.svg#icon-x"></use>
        </svg>
      </button>
      <div className={css.appointment_info}>
        <h2 className={css.appointment_title}>
          Make an appointment<br></br> with a babysitter
        </h2>
        <p className={css.appointment_text}>
          Arranging a meeting with a caregiver for your child is the first step
          to creating a safe and comfortable environment. Fill out the form
          below so we can match you with the perfect care partner.
        </p>
      </div>
      <div className={css.nanny_info}>
        <div className={css.nanny_photo}>
          <img
            className={css.avatar}
            //   src={nanny.avatar_ur}
            //   alt={nanny}
            width={44}
            height={44}
          ></img>
        </div>
        <div className={css.nanny_name}>
          <p className={css.nanny_name_text}>Nanny</p>
          {/* <p className={css.nanny_name_name}>{nanny.name}</p> */}
        </div>
      </div>
      <form className={css.form}>
        <div className={css.form_row}>
          <input
            className={css.input_row}
            type="address"
            placeholder="Address"
          ></input>
          <input
            className={css.input_row}
            type="tel"
            placeholder="+380"
          ></input>
        </div>
        <div className={css.form_row}>
          <input
            className={css.input_row}
            type="number"
            placeholder="Child's age"
          ></input>
          <input
            className={css.input_row}
            type="time"
            placeholder="00:00"
          ></input>
        </div>
        <label>
          <input className={css.input} type="email" placeholder="Email"></input>
        </label>
        <label>
          <input
            className={css.input}
            type="text"
            placeholder="Father's or mother's name"
          ></input>
        </label>
        <textarea
          className={css.textarea}
          name="comment"
          placeholder="Comment"
          rows={3}
        />
        <button className={css.form_btn} type="submit">
          Send
        </button>
      </form>
    </div>
  );
}
