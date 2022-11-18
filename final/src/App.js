import { 
  DarkButton, 
  LightButton,
  Section, 
  BoostrapButton, 
  Turquoise, 
  River,
  Amethyste, 
  BootstrapBadge
} from "./lib-ui"


function App() {
  return (
    <div className="container">
      <h1 className="mt-4 text-primary">UI Library</h1><hr />
      <Section>
        <h2>Exemple</h2>
        <DarkButton>Button</DarkButton>
        <LightButton>Button A</LightButton>
      </Section>
      <Section>
        <h2>Buttons</h2>
        <Turquoise>Turquoise</Turquoise>
        <River>River</River>
        <Amethyste>Amethyste</Amethyste>
        <BoostrapButton color="#e67e22">Carrot</BoostrapButton>
      </Section>

      <Section>
        <h2>Outlined</h2>
        <Turquoise outlined>Turquoise</Turquoise>
        <River outlined>River</River>
        <Amethyste outlined>Amethyste</Amethyste>
        <BoostrapButton color="#e67e22" outlined>Carrot</BoostrapButton>
      </Section>

      <Section>
        <h2>Rounded</h2>
        <div className="mb-4">
          <Turquoise rounded>Turquoise</Turquoise>
          <River rounded>River</River>
          <Amethyste rounded>Amethyste</Amethyste>
          <BoostrapButton color="#e67e22" rounded>Carrot</BoostrapButton>
        </div>
        <Turquoise outlined rounded>Turquoise</Turquoise>
        <River outlined rounded>River</River>
        <Amethyste outlined rounded>Amethyste</Amethyste>
        <BoostrapButton color="#e67e22" outlined rounded>Carrot</BoostrapButton>
      </Section>
      <Section>
          <h2>Badge</h2>
          <div>
            <BootstrapBadge variant="primary">primary</BootstrapBadge>
            <BootstrapBadge variant="turquoise">Turquoise</BootstrapBadge> 
            <BootstrapBadge variant="river">River</BootstrapBadge>
            <BootstrapBadge variant="carrot">Carrot</BootstrapBadge>
          </div>
          <div>
            <BootstrapBadge variant="primary" rounded>primary</BootstrapBadge>
            <BootstrapBadge variant="turquoise" rounded>Turquoise</BootstrapBadge> 
            <BootstrapBadge variant="river" rounded>River</BootstrapBadge>
            <BootstrapBadge variant="carrot" rounded>Carrot</BootstrapBadge>
          </div>
      </Section>
    </div>
  );
}

export default App;
