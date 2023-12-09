import React from "react";
import { StickySection, BubblesContainer, Bubble } from "./StyledBackground";


export default function Background() {

  const [clicked, setClicked] = React.useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleExplode = () => {
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 1000);
  };

  React.useEffect(() => {
    if (clicked) {
      handleExplode();
    } 
  }, [clicked]);


  return (
    <StickySection>
      <BubblesContainer>
        <Bubble className={clicked ? 'Teste' : ''}/>
        <Bubble className={clicked ? 'Teste' : ''}/>
        <Bubble className={clicked ? 'Teste' : ''}/>
        <Bubble className={clicked ? 'Teste' : ''}/>
        <Bubble className={clicked ? 'Teste' : ''}/>
        <Bubble className={clicked ? 'Teste' : ''}/>
        <Bubble className={clicked ? 'Teste' : ''}/>
        <Bubble className={clicked ? 'Teste' : ''}/>
        <Bubble className={clicked ? 'Teste' : ''}/>
        <Bubble className={clicked ? 'Teste' : ''}/>
      </BubblesContainer>
    </StickySection>
  );
}
