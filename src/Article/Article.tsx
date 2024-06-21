import Paragraph from "./components/Paragraph.tsx";
import Header from "./components/Header.tsx";

export default function Article() {

  return (
    <div className="bg-white">
      <Header>
        The important thing is this: to be ready at any moment to sacrifice what you are for what you could become.
        ― Charles Dickens
      </Header>
      <Paragraph className="text-white">
        Meditation was the first thing I turned to when anything challenging came up in my personal life. After a series
        of traumatic events, I built the habit of sitting down and facing these difficulties head on instead of finding
        ways to avoid the pain I was feeling inside. After many years of keeping up this practice, I developed an
        ability to observe many of my problems for what they truly were. Whenever I was frustrated at work, I could
        meditate on the root cause of my frustration and begin dissolving the problem - little by little. You feel you
        aren’t being appreciated enough, my heart would tell me. After I identified the root cause of my inner turmoil
        and acknowledged it, I could begin directing my attention to either remediating the problem, or focus on letting
        go of the situation if it was beyond my control. It was a beautiful practice, and I remain forever changed by
        it.
      </Paragraph>
      <Paragraph className="text-black">
        I have something to confess however. In the past 4 months, I have not meditated at all. Not even a brief moment
        to stop and assess. Nothing. While this may sound normal to the layperson, this is a tremendous shift for me. I
        was always a meditator, was always supposed to be a meditator, and here I am - not being a meditator (I can hear
        a monk chuckling somewhere). Sadhguru once said that meditation is the symptom of a higher aim. Had I lost my
        cause?
      </Paragraph>
    </div>
  )
}
