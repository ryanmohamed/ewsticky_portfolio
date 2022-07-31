import React, { useEffect, useState } from 'react';
import usePhoneMode from '../../hooks/usePhoneMode';
import styles from './Panel.module.css'


const panelw = 750;
const panelh = 450;
let slide = panelw + 0; //<- margin if any

function Panel(props) {
  
  const { children, title, company } = props;
  const numChildren = React.Children.count(children);

  const [shift, setShift] = useState(0);
  const [index, setIndex] = useState(0);
  const [phoneMode] = usePhoneMode();
  
  const left = (e) => {
    e.preventDefault();
    const newshift = shift+slide;
    if (newshift <= 0 ) {
      setShift(newshift);
    }
  };

  const right = (e) => {
    e.preventDefault();
    const newshift = shift-slide;
    if (newshift >= -slide*(numChildren-1)) {
      setShift(newshift);
    }
  };

  const onChange = (e) => {
    setShift(e.target.value * -slide);
  }

  useEffect(() => {
    setIndex(Math.abs(shift/slide));
  }, [shift]);

  useEffect(() => {
    slide = phoneMode ? 400 : 750;
    setShift(0);
  }, [phoneMode]);

  //REACT CLONE ELEMENT, if we want to reproduce children with new props
//   const clones = React.Children.map(children, (child, key) => {
//     const kid = React.cloneElement(child, { style: { padding: "10px" }, key: { key } }, null);
//     console.log(kid);
//     return kid; 
//   });

  return (
    <div className={styles.Panel}>


    <div className={styles.Header}>
      <h1 className={styles.Title}>{title}</h1>
      <h2 className={styles.Company}>{company}</h2>
    </div>

    <button onClick={left} className={styles.LeftButton}>
        <img alt="arrow" src="/assets/chevron.svg"></img>
    </button>

    <div className={styles.Container}>
      <div className={styles.Swiper} 
      style={{ transform: `translate3d(${shift}px, 0px, 0px)`, }}>
          { props.children && props.children }
      </div>
    </div>

    <button onClick={right} className={styles.RightButton}>
        <img alt="arrow" src="/assets/chevron.svg"></img>
    </button>

    <form onChange={onChange} className={styles.QuickTravel}> 
        { React.Children.map(children, (child, key) => {
            return <input 
                    className={styles.Radio} 
                    type="radio" 
                    name="swiper" 
                    value={key}
                    checked={ (key == index) ? true : false }
                    onChange={e => {
                      return
                    }}
                    />
        }) }
    </form>

    </div>
  );
}

export default Panel;