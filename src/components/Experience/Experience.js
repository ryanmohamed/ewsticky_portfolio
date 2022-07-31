import React from 'react';
import Panel from '../Panel/Panel';
import Section from '../Panel/Section';
import styles from './Experience.module.css';

const temp = {
  data: [
    {
      src: "somefile.png",
      type: "general",
      description: "lorem ipsem ..."
    },
    {
      src: "somefile.png",
      type: "responsibilities",
      description: "lorem ipsem ..."
    },
    {
      src: "somefile.png",
      type: "relevant skills",
      description: "lorem ipsem ..."
    }
  ]
};

function Experience() {
  return (
    <main className={styles.Experience}>
        

      <Panel 
        title="Drone Camp Lead Instructor"
        company="theCoderSchool">

        <Section src="/assets/images/space.png">
          <b>Overview</b>
          <p>Lorem ipsum yadda yadda gablooy bottle rocket. Lorem ipsum yadda yadda gablooy bottle rocket. Lorem ipsum yadda yadda gablooy bottle rocket. </p>
        </Section>
        <Section src="/assets/images/space5.png">
          <b>General Concepts</b>
          <p>Lorem ipsum yadda yadda gablooy bottle rocket. Lorem ipsum yadda yadda gablooy bottle rocket. Lorem ipsum yadda yadda gablooy bottle rocket. </p>
        </Section>
        <Section src="/assets/images/space3.png">
          <ul>
            <li>sup</li>
            <li>
              <select>
                <option>yo</option>
                <option>get</option>
                <option>out</option>
              </select>
            </li>
            <li>waddup</li>
            <li>
              <input type="date" />
            </li>
          </ul>
        </Section>
        <Section src="/assets/images/space5.png"/>
        <Section src="/assets/images/space.png">
          <b>Responsibilities</b>
          <p>Lorem ipsum yadda yadda gablooy bottle rocket. Lorem ipsum yadda yadda gablooy bottle rocket. Lorem ipsum yadda yadda gablooy bottle rocket. </p>
        </Section>
        <Section src="/assets/images/space4.png"/>
        <Section src="/assets/images/space5.png">
          <b>General Concepts</b>
          <p>Lorem ipsum yadda yadda gablooy bottle rocket. Lorem ipsum yadda yadda gablooy bottle rocket. Lorem ipsum yadda yadda gablooy bottle rocket. </p>
        </Section>
        <Section src="/assets/images/space3.png"/>
        <Section src="/assets/images/space5.png"/>
        <Section src="/assets/images/space.png">
          <b>Responsibilities</b>
          <p>Lorem ipsum yadda yadda gablooy bottle rocket. Lorem ipsum yadda yadda gablooy bottle rocket. Lorem ipsum yadda yadda gablooy bottle rocket. </p>
        </Section>
        <Section src="/assets/images/space4.png"/>
      
      </Panel>

      <Panel 
        title="App Development Camp Lead Instructor"
        company="theCoderSchool">

        <Section src="/assets/images/space.png">
          <b>Overview</b>
          <p>Lorem ipsum yadda yadda gablooy bottle rocket. Lorem ipsum yadda yadda gablooy bottle rocket. Lorem ipsum yadda yadda gablooy bottle rocket. </p>
        </Section>
        <Section src="/assets/images/space5.png">
          <b>General Concepts</b>
          <p>Lorem ipsum yadda yadda gablooy bottle rocket. Lorem ipsum yadda yadda gablooy bottle rocket. Lorem ipsum yadda yadda gablooy bottle rocket. </p>
        </Section>
        <Section src="/assets/images/space3.png"/>
      </Panel>

      <Panel 
        title="Code Coach"
        company="theCoderSchool">

        <Section src="/assets/images/space.png">
          <b>Overview</b>
          <p>Lorem ipsum yadda yadda gablooy bottle rocket. Lorem ipsum yadda yadda gablooy bottle rocket. Lorem ipsum yadda yadda gablooy bottle rocket. </p>
        </Section>
        <Section src="/assets/images/space5.png">
          <b>General Concepts</b>
          <p>Lorem ipsum yadda yadda gablooy bottle rocket. Lorem ipsum yadda yadda gablooy bottle rocket. Lorem ipsum yadda yadda gablooy bottle rocket. </p>
        </Section>
        <Section src="/assets/images/space3.png"/>
      </Panel>

      <Panel 
        title="Shift Manager"
        company="Deals & Discounts">

        <Section src="/assets/images/space.png">
          <b>Overview</b>
          <p>Lorem ipsum yadda yadda gablooy bottle rocket. Lorem ipsum yadda yadda gablooy bottle rocket. Lorem ipsum yadda yadda gablooy bottle rocket. </p>
        </Section>
        <Section src="/assets/images/space5.png">
          <b>General Concepts</b>
          <p>Lorem ipsum yadda yadda gablooy bottle rocket. Lorem ipsum yadda yadda gablooy bottle rocket. Lorem ipsum yadda yadda gablooy bottle rocket. </p>
        </Section>
        <Section src="/assets/images/space3.png"/>
      </Panel>

      <Panel 
        title="Freight/Pack-out Associate"
        company="The Home Depot">

        <Section src="/assets/images/space.png">
          <b>Overview</b>
          <p>Lorem ipsum yadda yadda gablooy bottle rocket. Lorem ipsum yadda yadda gablooy bottle rocket. Lorem ipsum yadda yadda gablooy bottle rocket. </p>
        </Section>
        <Section src="/assets/images/space5.png">
          <b>General Concepts</b>
          <p>Lorem ipsum yadda yadda gablooy bottle rocket. Lorem ipsum yadda yadda gablooy bottle rocket. Lorem ipsum yadda yadda gablooy bottle rocket. </p>
        </Section>
        <Section src="/assets/images/space3.png"/>
      </Panel>

    </main>
  );
}

export default Experience;