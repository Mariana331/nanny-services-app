import css from "./NannyCard.module.css";

export default function NannyCard() {
  return (
    <div className={css.card}>
      <svg className={css.favorite_icon} width={26} height={26}>
        <use href="/sprite.svg#icon-favor"></use>
      </svg>
      <div className={css.image_box}>
        <img
          className={css.avatar}
          //   src={nanny.avatar_ur}
          //   alt={nanny}
          width={96}
          height={96}
        ></img>
      </div>
      <div className={css.box_name}>
        <p className={css.box_name_text}>Nanny</p>
        {/* <p className={css.nanny_name}>{nanny.name}</p> */}
      </div>
      <div className={css.box_block}>
        <div className={css.address}>
          <svg className={css.block_icon} width={16} height={16}>
            <use href="/sprite.svg#icon-Location"></use>
          </svg>
          {/* <p className={css.address_text}>{nanny.location}</p> */}
        </div>
        <span className={css.box_block_span}>|</span>
        <div className={css.rating}>
          <svg className={css.block_icon} width={16} height={16}>
            <use href="/sprite.svg#icon-star"></use>
          </svg>
        </div>
      </div>
    </div>
  );
}
