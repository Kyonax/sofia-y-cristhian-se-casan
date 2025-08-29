import InviteTitle from "./InviteTitle";
import "./scss/SubSectionGifts.scss";

const SubSectionGifts = () => {
  return (
    <div class="gifts-section">
      <InviteTitle main="Regalos" background="Presents" />

      <p data-animate="in-place" class="gifts-section__message">
        El detalle más valioso es tenerte con nosotros en este día. No
        esperaremos obsequios, solo tu alegría de celebrar nuestra unión.
      </p>
    </div>
  );
};

export default SubSectionGifts;
