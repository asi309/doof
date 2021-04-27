import LoginForm from './login-form';
import { ReactComponent as YellowBubble } from '../assets/YellowBubble.svg';
import { ReactComponent as TopBubble } from '../assets/Bubble.svg';
import { ReactComponent as BottomBubble } from '../assets/BubbleBottom.svg';
import illustration from '../assets/Illustration.png';

import classes from './background.module.css';

export default function Background() {
  return (
    <div className={classes.background}>
      <div className={classes.bubble}>
        <TopBubble />
        <h1>DOOF</h1>
      </div>
      <div className={classes.yellowBubble}>
        <YellowBubble />
        <div>
          <button onClick={() => console.log('Test Pressed')}>Test</button>
          <img
            src={illustration}
            alt="background"
            className={classes.illustration}
          />
        </div>
      </div>
      <div className={classes.bottomBubble}>
        <BottomBubble />
      </div>
      <LoginForm />
      <div className={classes.footer}>
        <div>Terms of Service</div>
        <div>Privacy Policy</div>
      </div>
    </div>
  );
}
