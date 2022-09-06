import './about.scss'
import { FaRegGrinAlt, FaRegHandPointDown } from 'react-icons/fa';

export default function About() {
  const smiley = FaRegGrinAlt();
  const pointer = FaRegHandPointDown();

  return (
    <div className="aboutpage">
      <h1>Thanks for Visiting!</h1>
      <hr></hr>
      <div className='resources'>
      <h2>{pointer} Resources {pointer}</h2>
      <h3><a href="https://github.com/Lortiz528/FSPP-App" >Github Repo Here</a></h3>
      <h3><a href='https://www.amiiboapi.com/' >Amiibo API page</a></h3>
      </div>

      <hr></hr>
      <div>
        <h3>Created by Luis Ortiz {smiley}</h3>
        <img
          className="profile"
          src="https://avatars.githubusercontent.com/u/96318347?v=4"
          alt="Luis"
        />
        <strong><p className="bio">
          I am a full stack developer with a background in
          Logistics/transportation. I have a passion for wildlife, space
          exploration, and baseball.
        </p></strong>
        
        <div className="links">
          <a className="github" href="https://github.com/Lortiz528">
            <img
              align="center"
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              height="75"
              width="75"
              alt="github"
            />
          </a>
            <a href="https://www.buymeacoffee.com/lortiztech">
              <img
                align="center"
                src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                height="50"
                width="210"
                alt="lortiztech"
              />
            </a>
         
          <a href="https://linkedin.com/in/lortiz528" target="blank">
            <img
              align="center"
              src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
              alt="lortiz528"
              height="30"
              width="40"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
