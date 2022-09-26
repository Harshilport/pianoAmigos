import React, { useState } from "react";
import Card from "./Card";
import thumbnail from "../folio/aedil.webp";
import logoImg from "../icons/logo.jpg";
import logoImg2 from "../icons/l.jpg"
import thumbnail2 from "../folio/fur.webp";
import thumbnail3 from "../folio/pehla.jpg";
import thumbnail4 from "../folio/pirates.jpg";
import thumbnail5 from "../folio/onmy.jpg";
import thumbnail6 from "../folio/5-min.webp";
import thumbnail7 from "../folio/bekh.jpg";
import thumbnail8 from "../folio/coffin.jpg";
import thumbnail9 from "../folio/6-min.webp";
import thumbnail10 from "../folio/onmy.jpg";
import thumbnail11 from "../folio/mq3.jpg";
import thumbnail12 from "../folio/mqdefault.webp";
import thumbnail13 from "../folio/brown.jpg"
import thumbnail14 from "../folio/bachpan.jpg"
import thumbnail15 from "../folio/galbangai.webp"
import thumbnail16 from "../folio/high.jpg"
import thumbnail17 from "../folio/nano.jpg"
import thumbnail18 from "../folio/ravan.jpg"
import logo3 from "../icons/swtb.jpg"

const Services = (props) => {
  const [displayMore, setDisplayMore] = useState(false);
  const showMore = () => {
    setDisplayMore(true);
  };
  const showLess = () => {
    setDisplayMore(false);
  };
  const [disFF, setDisFF] = useState(true)
  const onDis = () => { 
    setDisFF(true)
  }
  const offDis = () => {
    setDisFF(false)
  }
  return (
    <div style={{backgroundColor: "white", height: "40%"}}>
      <h2 style={{
        display: "flex",
        justifyContent: "center",
        fontSize: "3.4rem",
        marginTop: "7rem",
        textTransform: "uppercase",
        fontWeight: "600",
        color: "rgb(0 10 45)",
        fontSize: "2.8rem",
      }}>Portfolio</h2>
      <br />
        
      {!displayMore ? 
      <>
      <div style={{ width: "100%" }} id={props.serviceId}>

        <div
          className="cardContainer"
          style={{ display: "grid ", gridTemplateColumns: "repeat(3, 1fr)"}}
        >
          <Card
            thumbnail={thumbnail}
            linkTo="https://www.youtube.com/watch?v=mzyhstrjZ7Y"
            logoImg={logoImg2}
            heading="AeDilHainMushkil"
            uploadingTime="5 Hours Ago"
            description="Iintrumenetal cover on piano

            Music- Pritam
            Lyrics- Amitabh Bhattacharya
            Singer- Arijit Singh
            Sound Design- Dj Phukan, Sunny M.R.
            Music Programmers- Prasad Sashte, Sunny M.R. , Dj Phukan
            Mix- Sunny M.R. & Shadab Rayeen
            Master- Shadab Rayeen@Newedge
            Assistant - Abhishek Sortey
            
            Recording Engineer's- Ashwin Kulkarni, Himanshu Shirlekar, Kaushik Das, Lee Slater
            Please subscribe to my channel and share my videos.
            Thank you for watching"
          />
          <Card
            thumbnail={thumbnail2}
            linkTo="https://www.youtube.com/watch?v=d7yzChEqCYA"
            logoImg={logoImg2}
            heading="Fur Elis"
            uploadingTime="5 Hours Ago"
            description="Please like share and subscribe to my channel."
          />
          <Card
            thumbnail={thumbnail3}
            linkTo="https://www.youtube.com/watch?v=hrToS59xOG0"
            logoImg={logoImg}
            heading="Pehla Nasha"
            uploadingTime="5 Hours Ago"
            description=" Hey guys this is a very special video of Pehla Nasha Piano Cover, I hope you guys love it and share it to your friends and family.

            My second Youtube Channel:- https://www.youtube.com/channel/UCku-...
            
            My Website:- https://harshilport.github.io/harshil..."
          />
          <Card
            thumbnail={thumbnail4}
            linkTo="https://www.youtube.com/watch?v=VaWVEgaAqag"
            logoImg={logoImg}
            heading="He's a pirate"
            uploadingTime="5 Hours Ago"
            description=" Hey guys this is a pirates of the carrabian theme song. I hope you like, share and enjoy it.

            website:-  https://harshilport.github.io/harshil...
            
            channels:-  https://www.youtube.com/channel/UCLn0...
                                https://www.youtube.com/channel/UCku-...
                               https://www.youtube.com/channel/UC_qG..."
          />
          <Card
            thumbnail={thumbnail5}
            linkTo="https://www.youtube.com/watch?v=stAR8Mbynuk"
            logoImg={logoImg2}
            heading="On My Way"
            uploadingTime="5 Hours Ago"
            description="on my way piano cover here:
            lyrics here:
            
            I’m sorry but
            Don’t wanna talk
            I need a moment before i go
            It`s nothing personal
            
            I draw the blinds
            They don’t need to see me cry
            Cause even when they understand
            They don’t understand
            
            So then when I’m finished
            I’m all ‘bout my business
            And ready to save the world
            I’m takin my misery
            Make it my bitch
            Can’t be everyone’s favourite girl
            
            So, take aim and fire away
            I’ve never been so wide awake
            No, nobody but me can keep me safe
            And I’m on my way
            The blood moon is on the rise
            The fire burning in my eyes
            No, nobody but me can keep me safe
            And I’m on my way
            
            
            So, take aim and fire away
            I’ve never been so wide awake
            No, nobody but me can keep me safe
            And I’m on my way
            The blood moon is on the rise
            The fire burning in my eyes
            No, nobody but me can keep me safe
            And I’m on my way
            
            Song
            On My Way
            Artist
            Alan Walker, Sabrina Carpenter, Farruko
            Album
            On My Way
            Licensed to YouTube by
            [Merlin] Ultra Music, SME (on behalf of Ultra Records); Walt Disney Music Company (Publishing), UNIAO BRASILEIRA DE EDITORAS DE MUSICA - UBEM, LatinAutor - SonyATV, CMRRA, LatinAutor, LatinAutor - UMPG, EMI Music Publishing, SOLAR Music Rights Management, UMPI, Warner Chappell, BMI - Broadcast Music Inc., ASCAP, AMRA, LatinAutor - Warner Chappell, Sony ATV Publishing, and 22 music rights societies"
          />
          <Card
            thumbnail={thumbnail6}
            linkTo="https://www.youtube.com/watch?v=xsjrIxpv9Uw"
            logoImg={logoImg}
            heading="Turkish March"
            uploadingTime="5 Hours Ago"
            description="Hello Guys, 
            Hope you liked today's video of Turkish March Piano Cover composed by Mozart. If you liked today's video please hit the like and subscribe button & also share this video with your friends.
            
            Contact me at my Official Website - https://beastpiano.github.io
            
            Instagram Page - https://www.instagram.com/beast.piano"
          />
          <Card
            thumbnail={thumbnail7}
            linkTo="https://www.youtube.com/watch?v=YlPAfwf4M_0"
            logoImg={logoImg2}
            heading="Bekhayali"
            uploadingTime="5 Hours Ago"
          />
          <Card
            thumbnail={thumbnail8}
            linkTo="https://www.youtube.com/watch?v=aguYH-PnDpQ"
            logoImg={logoImg2}
            heading="Coffin Dance"
            uploadingTime="5 Hours Ago"
            description="  PLEASE SUBSCRIB E TO OUR CHANNEL 

            Song
            Astronomia 2K19 (Radio Edit)
            Artist
            Stephan F
            Licensed to YouTube by
            Label Worx (on behalf of Planet Dance Music); ASCAP, Abramus Digital, UNIAO BRASILEIRA DE EDITORAS DE MUSICA - UBEM, LatinAutor - PeerMusic, LatinAutor, LatinAutor - UMPG
            Song
            Astronomia
            Artist
            Vicetone, Tony Igy
            Album
            Astronomia
            Licensed to YouTube by
            The Orchard Music, SME (on behalf of disco:wax); UNIAO BRASILEIRA DE EDITORAS DE MUSICA - UBEM, Abramus Digital, LatinAutor - PeerMusic, LatinAutor, LatinAutor - UMPG, and 6 Music Rights Societies"
          />
          <Card
            thumbnail={thumbnail9}
            linkTo="https://www.youtube.com/watch?v=ftkMtxv0Rx8"
            logoImg={logoImg}
            heading="Peaches"
            uploadingTime="5 Hours Ago"
            description=" Hello, guys welcome to the beast piano, Hope you like the video.
            If you liked it please like and share this video and also subscribe to Beast Piano. 
            
            Peaches Piano Notes:
            I got my peaches out in Georgia (Oh yeah, shit)
            D5 D5 D5 D5 D5 D5 C5 E5 C5, A4 C5 C5
            
            I get my weed from California (That’s that shit)
            D5 D5 D5 D5 D5 D5 C5 E5 C5, A4 C5 C5
            
            I took my chick up to the North, yeah (Badass bitch)
            G5 F5 E5 D5 D5 D5 C5 E5 C5, C5 C5 C5
            
            I get my light right from the source, yeah (Yeah, that’s it)
            G5 F5 E5 D5 D5 D5 C5 E5 C5, C5 C5 C5
            
            And I say, oh (Oh)
            C5 D5 E5 E5..D5
            
            The way I breathe you in (In)
            F5 E5 D5 C5 D5 D5
            
            It’s the texture of your skin
            D5 E5 D5 C5 B4 C5 B4 A4
            
            I want to wrap my arms around you, babe, and never let you go
            C5 C5 C5 D5 E5 D5 C5 D5 E5 D5 C5 D5 E5 D5 C5 D5 C5 B4 A4 G4
            
            And I say, oh
            C5 D5 E5 E5..D5
            
            There’s nothing like your touch
            F5 E5 D5 C5 D5 D5
            
            It’s the way you lift me up
            D5 E5 D5 C5 B4 C5 B4 A4
            
            Yeah, and I’ll be right here with you till the end
            C5 C5 D5 F5 E5 D5 C5 C5 D5 D5
            
            I got my peaches out in Georgia (Oh yeah, shit)
            D5 D5 D5 D5 D5 D5 C5 E5 C5, A4 C5 C5
            
            I get my weed from California (That’s that shit)
            D5 D5 D5 D5 D5 D5 C5 E5 C5, A4 C5 C5
            
            I took my chick up to the North, yeah (Badass bitch)
            G5 F5 E5 D5 D5 D5 C5 E5 C5, C5 C5 C5
            
            I get my light right from the source, yeah (Yeah, that’s it)
            G5 F5 E5 D5 D5 D5 C5 E5 C5, C5 C5 C5"
          />
      
      </div>
      </div>
      <div style={{display: "flex", justifyContent: "center"}}>
      <button onClick={showMore} className="btn">Show More</button>
      </div>

      </> : <>
      <div style={{ width: "100%" }} id={props.serviceId}>

<div
  className="cardContainer"
  style={{ display: "grid ", gridTemplateColumns: "repeat(3, 1fr)"}}
>
<Card
            thumbnail={thumbnail}
            linkTo="https://www.youtube.com/watch?v=mzyhstrjZ7Y"
            logoImg={logoImg2}
            heading="AeDilHainMushkil"
            uploadingTime="5 Hours Ago"
            description="Iintrumenetal cover on piano

            Music- Pritam
            Lyrics- Amitabh Bhattacharya
            Singer- Arijit Singh
            Sound Design- Dj Phukan, Sunny M.R.
            Music Programmers- Prasad Sashte, Sunny M.R. , Dj Phukan
            Mix- Sunny M.R. & Shadab Rayeen
            Master- Shadab Rayeen@Newedge
            Assistant - Abhishek Sortey
            
            Recording Engineer's- Ashwin Kulkarni, Himanshu Shirlekar, Kaushik Das, Lee Slater
            Please subscribe to my channel and share my videos.
            Thank you for watching"
          />
          <Card
            thumbnail={thumbnail2}
            linkTo="https://www.youtube.com/watch?v=d7yzChEqCYA"
            logoImg={logoImg2}
            heading="Fur Elis"
            uploadingTime="5 Hours Ago"
            description="Please like share and subscribe to my channel."
          />
          <Card
            thumbnail={thumbnail3}
            linkTo="https://www.youtube.com/watch?v=hrToS59xOG0"
            logoImg={logoImg}
            heading="Pehla Nasha"
            uploadingTime="5 Hours Ago"
            description=" Hey guys this is a very special video of Pehla Nasha Piano Cover, I hope you guys love it and share it to your friends and family.

            My second Youtube Channel:- https://www.youtube.com/channel/UCku-...
            
            My Website:- https://harshilport.github.io/harshil..."
          />
          <Card
            thumbnail={thumbnail4}
            linkTo="https://www.youtube.com/watch?v=VaWVEgaAqag"
            logoImg={logoImg}
            heading="He's a pirate"
            uploadingTime="5 Hours Ago"
            description=" Hey guys this is a pirates of the carrabian theme song. I hope you like, share and enjoy it.

            website:-  https://harshilport.github.io/harshil...
            
            channels:-  https://www.youtube.com/channel/UCLn0...
                                https://www.youtube.com/channel/UCku-...
                               https://www.youtube.com/channel/UC_qG..."
          />
          <Card
            thumbnail={thumbnail5}
            linkTo="https://www.youtube.com/watch?v=stAR8Mbynuk"
            logoImg={logoImg2}
            heading="On My Way"
            uploadingTime="5 Hours Ago"
            description="on my way piano cover here:
            lyrics here:
            
            I’m sorry but
            Don’t wanna talk
            I need a moment before i go
            It`s nothing personal
            
            I draw the blinds
            They don’t need to see me cry
            Cause even when they understand
            They don’t understand
            
            So then when I’m finished
            I’m all ‘bout my business
            And ready to save the world
            I’m takin my misery
            Make it my bitch
            Can’t be everyone’s favourite girl
            
            So, take aim and fire away
            I’ve never been so wide awake
            No, nobody but me can keep me safe
            And I’m on my way
            The blood moon is on the rise
            The fire burning in my eyes
            No, nobody but me can keep me safe
            And I’m on my way
            
            
            So, take aim and fire away
            I’ve never been so wide awake
            No, nobody but me can keep me safe
            And I’m on my way
            The blood moon is on the rise
            The fire burning in my eyes
            No, nobody but me can keep me safe
            And I’m on my way
            
            Song
            On My Way
            Artist
            Alan Walker, Sabrina Carpenter, Farruko
            Album
            On My Way
            Licensed to YouTube by
            [Merlin] Ultra Music, SME (on behalf of Ultra Records); Walt Disney Music Company (Publishing), UNIAO BRASILEIRA DE EDITORAS DE MUSICA - UBEM, LatinAutor - SonyATV, CMRRA, LatinAutor, LatinAutor - UMPG, EMI Music Publishing, SOLAR Music Rights Management, UMPI, Warner Chappell, BMI - Broadcast Music Inc., ASCAP, AMRA, LatinAutor - Warner Chappell, Sony ATV Publishing, and 22 music rights societies"
          />
          <Card
            thumbnail={thumbnail6}
            linkTo="https://www.youtube.com/watch?v=xsjrIxpv9Uw"
            logoImg={logoImg}
            heading="Turkish March"
            uploadingTime="5 Hours Ago"
            description="Hello Guys, 
            Hope you liked today's video of Turkish March Piano Cover composed by Mozart. If you liked today's video please hit the like and subscribe button & also share this video with your friends.
            
            Contact me at my Official Website - https://beastpiano.github.io
            
            Instagram Page - https://www.instagram.com/beast.piano"
          />
          <Card
            thumbnail={thumbnail7}
            linkTo="https://www.youtube.com/watch?v=YlPAfwf4M_0"
            logoImg={logoImg2}
            heading="Bekhayali"
            uploadingTime="5 Hours Ago"
          />
          <Card
            thumbnail={thumbnail8}
            linkTo="https://www.youtube.com/watch?v=aguYH-PnDpQ"
            logoImg={logoImg2}
            heading="Coffin Dance"
            uploadingTime="5 Hours Ago"
            description="  PLEASE SUBSCRIB E TO OUR CHANNEL 

            Song
            Astronomia 2K19 (Radio Edit)
            Artist
            Stephan F
            Licensed to YouTube by
            Label Worx (on behalf of Planet Dance Music); ASCAP, Abramus Digital, UNIAO BRASILEIRA DE EDITORAS DE MUSICA - UBEM, LatinAutor - PeerMusic, LatinAutor, LatinAutor - UMPG
            Song
            Astronomia
            Artist
            Vicetone, Tony Igy
            Album
            Astronomia
            Licensed to YouTube by
            The Orchard Music, SME (on behalf of disco:wax); UNIAO BRASILEIRA DE EDITORAS DE MUSICA - UBEM, Abramus Digital, LatinAutor - PeerMusic, LatinAutor, LatinAutor - UMPG, and 6 Music Rights Societies"
          />
          <Card
            thumbnail={thumbnail9}
            linkTo="https://www.youtube.com/watch?v=ftkMtxv0Rx8"
            logoImg={logoImg}
            heading="Peaches"
            uploadingTime="5 Hours Ago"
            description=" Hello, guys welcome to the beast piano, Hope you like the video.
            If you liked it please like and share this video and also subscribe to Beast Piano. 
            
            Peaches Piano Notes:
            I got my peaches out in Georgia (Oh yeah, shit)
            D5 D5 D5 D5 D5 D5 C5 E5 C5, A4 C5 C5
            
            I get my weed from California (That’s that shit)
            D5 D5 D5 D5 D5 D5 C5 E5 C5, A4 C5 C5
            
            I took my chick up to the North, yeah (Badass bitch)
            G5 F5 E5 D5 D5 D5 C5 E5 C5, C5 C5 C5
            
            I get my light right from the source, yeah (Yeah, that’s it)
            G5 F5 E5 D5 D5 D5 C5 E5 C5, C5 C5 C5
            
            And I say, oh (Oh)
            C5 D5 E5 E5..D5
            
            The way I breathe you in (In)
            F5 E5 D5 C5 D5 D5
            
            It’s the texture of your skin
            D5 E5 D5 C5 B4 C5 B4 A4
            
            I want to wrap my arms around you, babe, and never let you go
            C5 C5 C5 D5 E5 D5 C5 D5 E5 D5 C5 D5 E5 D5 C5 D5 C5 B4 A4 G4
            
            And I say, oh
            C5 D5 E5 E5..D5
            
            There’s nothing like your touch
            F5 E5 D5 C5 D5 D5
            
            It’s the way you lift me up
            D5 E5 D5 C5 B4 C5 B4 A4
            
            Yeah, and I’ll be right here with you till the end
            C5 C5 D5 F5 E5 D5 C5 C5 D5 D5
            
            I got my peaches out in Georgia (Oh yeah, shit)
            D5 D5 D5 D5 D5 D5 C5 E5 C5, A4 C5 C5
            
            I get my weed from California (That’s that shit)
            D5 D5 D5 D5 D5 D5 C5 E5 C5, A4 C5 C5
            
            I took my chick up to the North, yeah (Badass bitch)
            G5 F5 E5 D5 D5 D5 C5 E5 C5, C5 C5 C5
            
            I get my light right from the source, yeah (Yeah, that’s it)
            G5 F5 E5 D5 D5 D5 C5 E5 C5, C5 C5 C5"
          />
            <Card
            thumbnail={thumbnail10}
            linkTo="https://www.youtube.com/watch?v=SDQKjhXBoZE"
            logoImg={logoImg2}
            heading="River Flows In You"
            uploadingTime="5 Hours Ago"
            description="hey guys sorry for late video
            but now finally video is here
             a theme composed by  yiruma river flows in you
            the most beutiful peice"
          />
          <Card
            thumbnail={thumbnail11}
            linkTo="https://www.youtube.com/watch?v=RrrjVglXM8k"
            logoImg={logoImg}
            heading="Running Up That Hill"
            uploadingTime="5 Hours Ago"
            description="This is an exceptional song from my favorite series Stranger Things. I hope you guys enjoy it & share it with your friends.

            LINKS:-
            
            website:-  https://harshilport.github.io/harshil...
            
            channels:-  https://www.youtube.com/channel/UCLn0...
                                https://www.youtube.com/channel/UCku-...
                               https://www.youtube.com/channel/UC_qG..."
          />
          <Card
            thumbnail={thumbnail12}
            linkTo="https://www.youtube.com/watch?v=wnQXxJzIOtE"
            logoImg={logoImg2}
            heading="Gulabi Ankhey"
            uploadingTime="5 Hours Ago"
            description="This is gulabi ankhey piano ankhey I hoper you will enjoy this and smash that like button. I also request it to share it to your frieands and family"
          />
          <Card
          thumbnail={thumbnail13}
          linkTo="https://www.youtube.com/watch?v=sS18jvtXE7U"
          logoImg={logo3}
          heading="Brown Munde - Free Fire Beat Sync Montage"
          uploadingTime="5 Hours Ago"
          description="Music
          SONG
          Reminisce
          ARTIST
          LH Instrumentals
          ALBUM
          Reminisce
          LICENCES
          Interstreet Recordings (on behalf of LH Instrumentals); Interstreet Publishing, and 1 music rights societies
          "
        />
        <Card
          thumbnail={thumbnail14}
          linkTo="https://www.youtube.com/watch?v=a_FD1_ctDaU&t=1s"
          logoImg={logo3}
          heading="Bachpan Ka Pyaar Free Fire Beat Sync Montage"
          uploadingTime="5 Hours Ago"
          description=""
        />
        <Card
          thumbnail={thumbnail15}
          linkTo="https://www.youtube.com/watch?v=1-t5ig_TezE"
          logoImg={logo3}
          heading="Gal Ban Gayi - Free Fire Montage"
          uploadingTime="5 Hours Ago"
          description=""
        />
        <Card
          thumbnail={thumbnail16}
          linkTo="https://www.youtube.com/watch?v=HHfkiq8al3E&t=4s"
          logoImg={logo3}
          heading="High Heels Free Fire Beat Sync Montage"
          uploadingTime="5 Hours Ago"
          description="Music
          SONG
          High Heels
          ARTIST
          Jaz Dhami feat. Yo Yo Honey Singh
          ALBUM
          High Heels
          LICENCES
          [Merlin] abcdigitalcom (on behalf of Sanchez Productions); LatinAutorPerf, LatinAutor, Polaris Hub AB, UNIAO BRASILEIRA DE EDITORAS DE MUSICA - UBEM, BMI - Broadcast Music Inc., LatinAutor - Warner Chappell, LatinAutor - PeerMusic, and 14 music rights societies"
        />
        <Card
          thumbnail={thumbnail17}
          linkTo="https://www.youtube.com/watch?v=9qDUI37lABo"
          logoImg={logo3}
          heading="Nano mein Sapna FF Beat Sync Montage || STWB"
          uploadingTime="5 Hours Ago"
          description="Music
          SONG
          Naino Mein Sapna
          ARTIST
          Amit Kumar, Shreya Ghoshal
          ALBUM
          Himmatwala
          LICENCES
          saregama (on behalf of Saregama India Limited); Saregama Publishing, LatinAutorPerf, and 6 music rights societies"
        />
        <Card
          thumbnail={thumbnail18}
          linkTo="https://www.youtube.com/watch?v=kcx2ORLg7ao"
          logoImg={logo3}
          heading="Ravan Ravan Hoon Main Free Fire Beat Sync Montage"
          uploadingTime="5 Hours Ago"
          description="SONG
          Ravan Ravan Hoon Main
          ARTIST
          Rock D
          ALBUM
          Ravan Ravan Hoon Main
          LICENCES
          Believe Music (on behalf of Geet Mp3); Polaris Hub AB, LatinAutorPerf, and 11 music rights societies
          "
        />
        </div>
        </div>
      <div style={{display: "flex", justifyContent: "center"}}>
      <button onClick={showLess} className="btn">Show Less</button>
      </div>
        </>}
    </div>
  )
};

export default Services;
