import css from "./NannyCard.module.css";
import type { Nanny } from "../../types/types";

interface NannyProps {
  nanny: Nanny;
}

export default function NannyCard({ nanny }: NannyProps) {
  return (
    <div className={css.card}>
      <svg className={css.favorite_icon} width={26} height={26}>
        <use href="/sprite.svg#icon-favor"></use>
      </svg>
      <div className={css.image_box}>
        <img
          className={css.avatar}
          src={nanny.avatar_url}
          alt={nanny.name}
          width={96}
          height={96}
        ></img>
      </div>
      <div className={css.box_name}>
        <p className={css.box_name_text}>Nanny</p>
        <p className={css.nanny_name}>{nanny.name}</p>
      </div>
      <div className={css.box_block}>
        <div className={css.address}>
          <svg className={css.block_icon} width={16} height={16}>
            <use href="/sprite.svg#icon-Location"></use>
          </svg>
          <p className={css.block_text}>{nanny.location}</p>
        </div>
        <span className={css.box_block_span}>|</span>
        <div className={css.rating}>
          <svg className={css.block_icon} width={16} height={16}>
            <use href="/sprite.svg#icon-star"></use>
          </svg>
          <p className={css.block_text}>Rating:{nanny.rating}</p>
        </div>
        <span className={css.box_block_span}>|</span>
        <div className={css.price}>
          <p className={css.block_text}>
            Price / 1 hour:
            <span className={css.span_green}>{nanny.price_per_hour}$</span>
          </p>
        </div>
      </div>
      <div className={css.age}>
        <p className={css.private_text}>
          Age: <span className={css.span_age}>{nanny.birthday}</span>
        </p>
      </div>
      <div className={css.experience}>
        <p className={css.private_text}>
          Experience: <span className={css.span_age}>{nanny.experience}</span>
        </p>
      </div>
      <div className={css.kids_age}>
        <p className={css.private_text}>
          Kids Age: <span className={css.span_age}>{nanny.kids_age}</span>
        </p>
      </div>
      <div className={css.characters}>
        <p className={css.private_text}>
          Characters: <span className={css.span_age}>{nanny.characters}</span>
        </p>
      </div>
      <div className={css.education}>
        <p className={css.private_text}>
          Education: <span className={css.span_age}>{nanny.education}</span>
        </p>
      </div>
      <p className={css.about}>{nanny.about}</p>
      <div className={css.review}>
        {nanny.reviews?.map((review, index) => (
          <div className={css.review_info} key={index}>
            <div className={css.review_name}>
              <div className={css.name_one_letter}>
                <p className={css.name_one_text}>{review.reviewer[0]}</p>
              </div>
              <div className={css.name_full}>
                <p className={css.name_full_black}>
                  {review.reviewer.slice(0, 5)}.
                </p>
                <svg className={css.name_full_icon} width={16} height={16}>
                  <use href="/sprite.svg#icon-star"></use>
                </svg>
                <p className={css.name_full_text}>{review.rating}</p>
              </div>
            </div>
            <p className={css.review_comment}>{review.comment}</p>
          </div>
        ))}
      </div>
      <div className={css.btn}>
        <button type="button" className={css.card_btn}>
          Make an appointment
        </button>
      </div>
      <button type="button" className={css.brn_more}>
        Read more
      </button>
    </div>
  );
}
