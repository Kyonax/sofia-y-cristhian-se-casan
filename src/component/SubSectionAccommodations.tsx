import AccommodationItem from "./AccommodationItem";
import InviteTitle from "./InviteTitle";
import "./scss/SubSectionAccommodations.scss";

const SubSectionAccommodations = () => {
  return (
    <section className="accommodations-section">
      <div class="accommodations-section__title">
        <InviteTitle main="Información Importante" background="Important" />
        <p data-animate="in-place" class="accommodations-section__description">
          Queremos que tu viaje y estadía sean lo más cómodos posible. Por eso,
          hemos reunido algunos datos útiles.
        </p>
      </div>

      <AccommodationItem
        iconName="SvgAirplane"
        name="Aerolínea Satena"
        background="Satena"
        description="La única aerolínea que conecta a Inírida con el resto del país."
        phone="3134493096"
        web="https://www.satena.com/"
      />

      <AccommodationItem
        iconName="SvgHotel"
        name="Hotel Parature"
        background="Parature"
        description="Ubicación central también es Café-Bar"
        phone="3102590686"
        web="https://www.tripadvisor.co/Hotel_Review-g3493976-d13535853-Reviews-Hotel_Parature-Inirida_Guainia_Department.html?m=19905"
      />

      <AccommodationItem
        iconName="SvgTonina"
        name="Tonina Amazonas Lodge"
        background="Amazonas"
        description="Ideal para quienes quieren una experiencia más natural. Hospedaje en cabañas / Ambiente tranquilo"
        phone="3105634887"
        web="https://toninastravel.com"
      />

      <AccommodationItem
        iconName="SvgHotel"
        name="Hotel Tucunaré"
        background="Tucunaré"
        description="A orillas del río Inírida, habitaciones con vista"
        phone="3118346865"
        web="https://lespotturismo.com/pages/contact?fbclid=PAQ0xDSwMStp9leHRuA2FlbQIxMQABp5NeDYqe5GLRUBzJOYpLeoWNH5H7eQ0uq58sXroJ-SyMsYuVaTdZVJx2AG-9_aem_7uCzXqK_dBAXJjt3eSsQ7g"
      />

      <AccommodationItem
        iconName="SvgCabanha"
        name="Hotel Cabañas Guainiana"
        background="Cabañas"
        description="Excelente opción para grupos y familias"
        phone="3225233545"
        web="https://www.tripadvisor.co/Hotel_Review-g3493976-d8474776-Reviews-La_Cabana_Guainiana-Inirida_Guainia_Department.html"
      />

      <AccommodationItem
        iconName="SvgHotel"
        name="Hotel Orinoco Real"
        background="Orinoco"
        description="Ubicación central, cómodo y accesible"
        phone="3026065093"
        web="https://www.tripadvisor.co/Hotel_Review-g3493976-d12496940-Reviews-Hotel_Orinoco_Real-Inirida_Guainia_Department.html"
      />
    </section>
  );
};

export default SubSectionAccommodations;
