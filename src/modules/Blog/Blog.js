import React, { Component } from "react";
import style from "./Blog.module.css";

class Blog extends Component {
	componentDidMount() {
		const script = document.createElement("script");
		script.id = "infogram_0_vr_device_awareness";
		script.title = "VR Device Awareness";
		script.src = "https://e.infogram.com/js/dist/embed.js?fTr";
		script.type = "text/javascript";
		const vrEmbed = this.refs.vrembed;
		console.log(vrEmbed);
		vrEmbed.append(script);
	}

	render() {
		return (
			<div className={style.blog}>
				<h1>This is what VR Needs</h1>
				<p> Nov 1, 2017 | CJ Goodwin</p>
				<p>
					Have you ever awoken from a dream to find yourself marveling
					at the realness of it?  That’s what VR does to you every
					time you put on the HMD. It sweeps the senses into a current
					of sight and sound, carrying consciousness into another
					dimension. The foundation of this new reality, however, is
					under threat of crumbling from a lack of a single critical
					component. VR needs quality content.  Only when quality
					content has deep roots will the VR ecosystem flourish.
				</p>
				<p>
					Rival Dust was created because we know that VR is a powerful
					storytelling tool and the feeling of being immersed in a VR
					game or movie is visceral, immediate and unrivaled by other
					media.  In spite of this groundbreaking technology, user
					acquisition rates are anemic and far below projected
					numbers.  Telling, though, is that VR has yet to permeate
					into the mass consciousness.  The following Nielsen graph
					puts the 6 DOF VR at 26% awareness and below, with the Vive
					at a meager 10%.
				</p>

				<div ref="vrembed" />
				<p>
					Ostensibly, we have a marketing issue. No one knows about
					the medium, and if no one knows about the medium then there
					won’t be any device sales.  Granted, the marketing effort
					put toward VR has been lackluster as HTC and Oculus have not
					done enough and are partly to blame for the dearth of market
					saturation.  But ultimately the lack of marketing is an
					indicator of something far more crucial: the lack of quality
					content.
				</p>
				<p>
					Adoption of video game hardware has historically been driven
					by the caliber of content offered on the platform.  Take for
					instance the Turbografx 16.  It came out 4 years after the
					NES, allowing the NES to pave the way for gaming culture.
					 Initially the TG-16 was extremely well received in Japan,
					out-selling most other consoles. But when they entered the
					North American and European market, they found that those
					developers were locked into exclusivity agreements with
					Nintendo.  As a result the TG-16 could not gather the
					quality and exclusive content required for hardware adoption
					in these markets
				</p>
				<p>
					This is evident in the release title available with the
					TG-16, Keith Courage in Alpha Zone.  According to the 1989
					October issue of Video Games and Computer Entertainment
					Magazine, writer Rusel DeMaria concluded that while Keith
					Courage was graphically superior, it lacked the depth of
					Super Mario Bros.  Also stating that Keith Courage’s levels
					are all roughly the same.  So even then, graphical upgrades
					were lower priority to gamers than quality game-play.
				</p>
				<p>
					Ouya had similar problems to the TG-16. Their efforts to
					attract exclusive high-quality content were fraught with
					difficulties.  They had a fund of 1 Million dollars to give
					to indie devs in order to retain exclusivity rights.  Public
					backlash due to the funds name of “free the games” put the
					Ouya in a difficult position and they reneged on the
					exclusivity rights (to their detriment).  That and there
					were claims of people gaming the Kickstarter system in order
					to get a piece of the fund so they pulled out some of the
					funds outright.  Many developers excused themselves from
					Ouya’s table and as a result Ouya’s only quality titles were
					ports.  So if people could already get these video games
					elsewhere, why get an Ouya?
				</p>
				<p>
					The strongest evidence for quality content, however, comes
					from the Wii U’s performance.  An article appearing in
					Kotaku shows that In May of 2014, Nintendo posted an
					operating loss of $456 million.  That same month Mario Kart
					8 was released.  The reviews were highly favorable, with 98%
					of critics giving a favorable review. Wii U proceeded to
					triple sales in their 3rd financial quarter with MK 8 having
					an attach rate of over 60%.  Nintendo President and CEO,
					Satoru Iwata attributed increased profits to the success of
					Smash Bros. for 3DS, and MK 8. This clearly bestows upon MK
					8 the mantle of killer-app.  Just a little pinch of that
					magic is exactly what Wii U needed in order for more people
					to adopt the hardware.
				</p>
				<p>
					So what is the magic that pushes a video game from middling
					to killer-app?  It’s actually really easy: back-breaking
					work and borderline obsessive dedication.  In order to get
					the public to fully embrace VR, we need to create the
					absolute best VR games, ones that are worthy of sharing
					among the video game community at large.  The road ahead for
					VR is long, since it is unlike any media that has come
					before it. And even though VR adds an exponential depth and
					complexity to our choices in direction and storytelling, we
					are still treating it with the same shallow approach we have
					used since its inception.
				</p>
				<p>
					So what are the right choices for creating in VR?  What is
					the path to creating the killer app that everyone wants so
					that we reach that peak of 1 billion VR users? We at Rival
					Dust believe we have part of the answer.  We want to share
					this and future insights with you, because a win for anyone
					in VR is a win for all of us.
				</p>
				<p>These are 8 ways to create quality VR content</p>
				<ol>
					<li>
						Create within the medium.  It’s easier to force the
						interaction around the medium rather than force the
						medium into the interaction.  An example of
						medium-forcing would be adding a directional pad to the
						screen of a mobile app.  Find what makes the most sense
						in VR and stick with those in-game interactions.
					</li>
					<li>
						Simplify Interaction.  If we give our player a base
						interaction, they have to be able to do that action 99%
						of the time, otherwise the interaction should not exist.
						 Admittedly, this is the most difficult thing to craft
						in a VR game. While the VR medium ostensibly expands the
						available interactive choices, we still have to take
						accessibility into account.
					</li>
					<li>
						Keep it clear.  All animations, movements, and
						interactions, should be clear in motive and exaggerated
						in purpose.  The hardware as it stands makes it
						difficult to perceive writing, objects at a distance,
						and other fine textures.  Exaggerating certain aspects
						of the digital world helps with clarity.
					</li>
					<li>
						Be original.  Our players expect the unexpected from us;
						since we are not beholden to corporate overlords, we can
						and should deliver the experiences they cannot get from
						AAA studios.
					</li>
					<li>
						Put in the time. Simply stated, the dedication we have
						to our games directly correlates to the quality of our
						work.
					</li>
					<li>
						Adhere to a standardized vocabulary.  Standardization
						leads to increased efficiency in workflow. We must
						create, organize, and share, as a community, any sort of
						interactive taxonomy.
					</li>
					<li>
						Engage the auditory sense.  Digital space requires audio
						population to effectively immerse the player. We want to
						ensure that the Music and Sound not only drives the
						player through a story that resonates with them, but
						also creates an emotional connection that fuels fun,
						energy, and style.
					</li>
					<li>
						Create with honesty.  Humans are keenly aware of
						authenticity. The best indie games are the ones that
						have an air of vulnerability and feel like a personal
						statement by the developers that created them.
					</li>
				</ol>
			</div>
		);
	}
}

export default Blog;
