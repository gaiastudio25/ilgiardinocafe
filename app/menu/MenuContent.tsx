"use client";

import Image from "next/image";

const menuData = {
  cafe: [
    { name: "Espresso simple", price: "130" },
    { name: "Espresso doble", price: "160" },
    { name: "Americano", price: "190" },
    { name: "Americano doble", price: "210" },
    { name: "Macchiato", price: "190" },
    { name: "Macchiato doble", price: "210" },
    { name: "Cortado", price: "220" },
    { name: "Moca", price: "240" },
    { name: "Latte", price: "240" },
    { name: "Vanilla Latte", price: "240" },
    { name: "Métodos", price: "240" },
    { name: "V60 Perú", price: "260" },
    { name: "V60 Mario", price: "280" },
    { name: "Affogato", price: "260" },
    { name: "Espresso Tonic", price: "250" },
    { name: "Cold Brew", price: "220" },
    { name: "Iced Vanilla Latte", price: "240" },
  ],
  bebidas: [
    { name: "Chocolate", price: "200" },
    { name: "Chai", price: "220" },
    { name: "Té", price: "180" },
    { name: "Jugo de naranja", price: "200" },
    { name: "Limonada", price: "220" },
    { name: "Infusiones", price: "170" },
    { name: "Té Blend", price: "190" },
    { name: "Frappé berries", price: "250" },
    { name: "Licuado con fruta de estación", price: "250" },
  ],
  dulces: [
    { name: "Rollo de canela", price: "240" },
    { name: "Rollo de manzana", price: "240" },
    { name: "Carrot Cake", price: "340" },
    { name: "Red Velvet Cake", price: "340" },
    { name: "Balisto dulce", price: "190" },
    { name: "Tarta de coco y dulce de leche", price: "200" },
    { name: "Muffin relleno de jalea", price: "180" },
    { name: "Cookie", price: "150" },
    { name: "Alfajor de banana y chocolate blanco", price: "210" },
    { name: "Alfajor clásico", price: "200" },
    { name: "Lemon Pie", price: "180" },
    { name: "Brownie de chocolate", price: "190" },
    { name: "Carrot Cake húmedo", price: "180" },
  ],
  granos: [
    { name: "Ethiopia", price: "250" },
    { name: "Asia Blend 200ml", price: "300" },
    { name: "Espresso Blend", price: "170" },
    { name: "Khipu de café brasil", price: "170" },
    { name: "Agua tónica 200ml", price: "180" },
  ],
  cocina: [
    { name: "Ensalada César", price: "310" },
    { name: "Focaccia Vito", price: "350" },
    { name: "Milanesa de berenjena al grill", price: "350" },
    { name: "Sándwich de pollo al grill", price: "340" },
    { name: "Sándwich Bruma", price: "350" },
    { name: "Bagel de salmón", price: "320" },
    { name: "Croquetas de papa y espinaca", price: "350" },
    { name: "Empanitas de pollo (4u)", price: "350" },
    { name: "Milanesa al pan", price: "310" },
    { name: "Ensalada de maple", price: "300" },
    { name: "Focaccia XL", price: "450" },
    { name: "Hummus", price: "300" },
    { name: "Hamburguesa de lentejas", price: "370" },
  ],
  desayunos: [
    { name: "Croissant relleno", price: "320" },
    { name: "Sándwich caprese", price: "450" },
    { name: "Focaccia rellena", price: "340" },
    { name: "Plate Brunch", price: "450" },
    { name: "Pan de queso", price: "170" },
    { name: "Pan de queso relleno", price: "180" },
    { name: "Medialuna", price: "120" },
    { name: "Medialuna rellena jamón y queso", price: "145" },
    { name: "Scone de queso", price: "100" },
    { name: "Scone relleno", price: "175" },
    { name: "Sándwich de jamón cocido y queso", price: "420" },
    { name: "Tostón con palta", price: "400" },
    { name: "Tostón de palta XL", price: "650" },
  ],
};

const categories = [
  { key: "cafe", title: "CAFÉ" },
  { key: "bebidas", title: "BEBIDAS SIN CAFÉINA" },
  { key: "dulces", title: "DULCES" },
  { key: "granos", title: "GRANO" },
  { key: "cocina", title: "COCINA" },
  { key: "desayunos", title: "DESAYUNOS Y MERIENDAS" },
];

function MenuItem({ name, price }: { name: string; price: string }) {
  return (
    <div className="menu-row">
      <span className="item-name">{name}</span>
      <span className="item-price">${price}</span>
    </div>
  );
}

function MenuSection({ title, items }: { title: string; items: { name: string; price: string }[] }) {
  const mid = Math.ceil(items.length / 2);
  const left = items.slice(0, mid);
  const right = items.slice(mid);

  return (
    <div className="menu-section">
      <h2 className="section-title">{title}</h2>
      <div className="columns-row">
        <div className="column">
          {left.map((item, idx) => (
            <MenuItem key={idx} name={item.name} price={item.price} />
          ))}
        </div>
        <div className="column">
          {right.map((item, idx) => (
            <MenuItem key={idx} name={item.name} price={item.price} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function MenuContent() {
  return (
    <div className="menu-wrapper">
      <style jsx global>{`
        .menu-wrapper {
          min-height: 100vh;
          background: #f7f3eb;
          padding: 70px 20px 44px;
          font-family: 'Times New Roman', Times, serif;
        }

        .menu-header {
          text-align: center;
          margin-bottom: 28px;
        }

        .header-logo img {
          max-width: 130px;
          height: auto;
          margin-bottom: 10px;
        }

        .header-subtitle {
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #5d6b4d;
          margin-bottom: 4px;
        }

        .header-title {
          font-size: 28px;
          font-weight: 400;
          color: #3d4d36;
        }

        .header-tagline {
          font-size: 12px;
          font-style: italic;
          color: #7a7a6b;
        }

        .menu-main {
          max-width: 640px;
          margin: 0 auto;
        }

        .columns-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0;
        }

        .left-col, .right-col {
          display: flex;
          flex-direction: column;
        }

        .columns-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .menu-section {
          margin-bottom: 20px;
        }

        .section-title {
          font-size: 13px;
          font-weight: 400;
          color: #3d4d36;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          margin-bottom: 8px;
          padding-bottom: 4px;
          border-bottom: 1px solid rgba(61, 77, 54, 0.2);
        }

        .column {
          display: flex;
          flex-direction: column;
        }

        .menu-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          padding: 4px 0;
          border-bottom: 1px dotted rgba(61, 77, 54, 0.12);
        }

        .item-name {
          font-size: 11px;
          color: #3d4d36;
        }

        .item-price {
          font-size: 11px;
          color: #3d4d36;
        }

        .menu-footer {
          text-align: center;
          margin-top: 32px;
          padding-top: 16px;
        }

        .footer-logo {
          font-size: 13px;
          color: #3d4d36;
        }

        .footer-tagline {
          font-size: 10px;
          font-style: italic;
          color: #7a7a6b;
        }

        @media (min-width: 580px) {
          .menu-wrapper {
            padding: 80px 32px 50px;
          }
          .header-title {
            font-size: 34px;
          }
          .columns-row {
            gap: 32px;
          }
          .columns-container {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
        }
      `}</style>

      <header className="menu-header">
       
        <p className="header-subtitle">Menú</p>
        <h1 className="header-title">Bruma Café</h1>
        <p className="header-tagline">La pausa que el día necesita</p>
      </header>

      <div className="menu-main">
        <div className="columns-container">
          <div className="left-col">
            {categories.slice(0, 3).map((cat) => (
              <MenuSection 
                key={cat.key} 
                title={cat.title} 
                items={menuData[cat.key as keyof typeof menuData]} 
              />
            ))}
          </div>
          <div className="right-col">
            {categories.slice(3, 6).map((cat) => (
              <MenuSection 
                key={cat.key} 
                title={cat.title} 
                items={menuData[cat.key as keyof typeof menuData]} 
              />
            ))}
          </div>
        </div>
      </div>

      <footer className="menu-footer">
        <p className="footer-logo">Bruma Café</p>
        <p className="footer-tagline">La pausa que el día necesita</p>
      </footer>
    </div>
  );
}