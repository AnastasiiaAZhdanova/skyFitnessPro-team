import styles from "styled-components";

export const ProfilePage = styles.div`
width:100vw;
min-height:100vh;
background:white;
margin-bottom: 30px;
`;

export const Container = styles.div`
  max-width:1140px;
  margin:0 auto;
  font-family: 'StratosSkyeng', sans-serif;

  @font-face {
    font-family: 'StratosSkyeng';
    src: url('../fonts/Stratos-Regular.woff') format('truetype');
  }
 
  font-family: 'StratosSkyeng', sans-serif;
`;

export const MainText = styles.p`
font-weight: 400;
font-size: 48px;
line-height: 56px;
`;

export const EntryText = styles.p`
font-weight: 400;
font-size: 24px;
line-height: 32px;
padding-top: 30px;
`;

export const ProfileBlock = styles.div`
margin-top: 50px;
`;

export const ProfileButtonBlock = styles.div`
display: flex;
flex-direction: column;
gap: 20px;
padding-top: 30px;
`;

export const Button = styles.button`
width:275px;
height:52px;
background: #580EA2;
border-radius: 46px;
color: #ffffff;
transition: all 0.5s;
font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
`;

export const MyCourses = styles.div`
margin-top: 50px;
`;

export const ImageBlock = styles.div`
margin-top: 30px;
`;

export const Yoga = styles.img`
width:360px;
height:480px;
`;

export const Stretching = styles.img`
width:360px;
height:480px;
`;

export const Bodyflex = styles.img`
width:360px;
height:480px;
`;
