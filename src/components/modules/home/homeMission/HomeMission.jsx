import MissionCard from "./missionCard/MissionCard";

function HomeMission() {
  return (
    <div className="home--mission app-container">
      <div className="home--mission__content">
        <div className="home--mission__content__missions">
          <MissionCard title="Our Vision">
            <p>
              To be a global leader in creative and technology consulting,
              empowering businesses to thrive in the digital age through
              innovative strategies, visionary design, and transformative
              technology solutions..
            </p>
          </MissionCard>
          <MissionCard title="Our Mission">
            <p>
              At Allera, we are committed to delivering exceptional value to our
              clients by:
            </p>
            <div>
              <p className="mission-point">
                <span className="bullet"></span>
                Fostering creativity and innovation to drive business growth.
              </p>
              <p className="mission-point">
                <span className="bullet"></span>
                Integrating technology seamlessly into creative solutions.
              </p>
              <p className="mission-point">
                <span className="bullet"></span>
                Providing expert guidance and consultancy tailored to individual
                client needs.
              </p>
              <p className="mission-point">
                <span className="bullet"></span>
                Nurturing partnerships that drive long-term success.
              </p>
            </div>
          </MissionCard>
        </div>

        <div className="home--mission__content__approach">
          <MissionCard title="Approach">
            <p>
              Our approach is centered around collaboration, innovation, and a
              deep understanding of your unique challenges and opportunities. We
              work closely with your team to co-create tailored solutions that
              align with your business goals. Our interdisciplinary team of
              creative minds, strategists, and technologists brings together
              diverse perspectives to deliver comprehensive and effective
              solutions.
            </p>
          </MissionCard>
        </div>
      </div>
    </div>
  );
}

export default HomeMission;
