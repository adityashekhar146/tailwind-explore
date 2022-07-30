import { NextPage } from "next";
import UserTile from "../components/profile/user-tile";

const About: NextPage = () => {

  return (
    <div className="flex flex-col md:flex-row">
      <UserTile
        displayName="Raj Shekhar Salugu Sai"
        title="Solutions Architect | Program Management | Full Stack Developer | Literature Lover"
        imageUrl="/images/raj.jpg" 
      />
      <UserTile
        displayName="Aditya Shekhar Salugu Sai"
        title="Solutions Architect | Cloud Engineer | Full Stack Developer | Avid Learner"
        imageUrl="/images/adi.png" 
      />
    </div>
  )
}

export default About;