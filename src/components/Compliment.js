import React, { useState } from 'react';
import styled from 'styled-components';
import  Lottie  from 'lottie-react';
import girlSittingAnimation from './../assets/girlSitting.json'; // Adjust path if necessary

// List of compliments
const compliments = [
    "You are incredible!",
    "You're a superstar!",
    "You have a fantastic personality!",
    "You are a cherished companion!",
    "You are exceptionally gifted!",
    "Your presence is like sunshine!",
    "You are a priceless treasure to those who know you!",
    "Your smile brightens everyone's day!",
    "You are a true inspiration!",
    "You are a wonderful human being!",
    "Your kindness is unmatched!",
    "You are a joy to be around!",
    "You have a heart of gold!",
    "Your intelligence is admirable!",
    "You are a fantastic listener!",
    "Your creativity is boundless!",
    "You are a true friend indeed!",
    "Your positivity is contagious!",
    "You are a true original!",
    "Your resilience is remarkable!",
    "You are a true gem!",
    "Your empathy is heartwarming!",
    "You are a true leader!",
    "Your determination is inspiring!",
    "You are a true visionary!",
    "Your compassion is admirable!",
    "You are a true hero!",
    "Your optimism is refreshing!",
    "You are a true role model!",
    "Your kindness knows no bounds!",
    "You are a true shining star!",
    "Your generosity is unparalleled!",
    "You are a true beacon of light!",
    "Your patience is commendable!",
    "You are a true pillar of strength!",
    "Your humor is delightful!",
    "You are a true ray of sunshine!",
    "Your wisdom is profound!",
    "You are a true gem in this world!",
    "Your resilience is awe-inspiring!",
    "You are a true inspiration to all!",
    "Your kindness knows no limits!",
    "You are a true example of excellence!",
    "Your positivity is infectious!",
    "You are a true force to be reckoned with!",
    "Your creativity knows no bounds!",
    "You are a true master of your craft!",
    "Your empathy is truly remarkable!",
    "You are a true beacon of hope!",
    "Your determination is unbreakable!",
    "You are a true leader among leaders!",
    "Your compassion is truly admirable!",
    "You are a true hero in every sense of the word!",
    "Your optimism is truly a breath of fresh air!",
    "You are a true role model for all to aspire to!",
    "Your kindness is a true gift to the world!",
    "You are a true shining star in the universe!",
    "Your generosity knows no bounds!",
    "You are a true beacon of light in a sometimes dark world!",
    "Your patience is truly commendable!",
    "You are a true pillar of strength for all who know you!",
    "Your humor is truly a delight to behold!",
    "You are a true ray of sunshine in everyone's life!",
    "Your wisdom is truly profound and inspiring!",
    "You are a true gem in this world, and we are lucky to have you!",
    "Your resilience is truly awe-inspiring and admirable!",
    "You are a true inspiration to all who have the pleasure of knowing you!",
    "Your kindness knows no limits, and it is truly remarkable!",
    "You are a true example of excellence in every aspect of your life!",
    "Your positivity is truly infectious and uplifting!",
    "You are a true force to be reckoned with, and we are all in awe of you!",
    "Your creativity knows no bounds, and it is truly remarkable!",
    "You are a true master of your craft, and we are all in admiration of your skills!",
    "Your empathy is truly remarkable and heartwarming!",
    "You are a true beacon of hope in a sometimes hopeless world!",
    "Your determination is truly unbreakable and inspiring!",
    "You are a true leader among leaders, and we are all fortunate to have you!",
    "Your compassion is truly admirable and inspiring!",
    "You are a true hero in every sense of the word, and we are all grateful for your heroism!",
    "Your optimism is truly a breath of fresh air in a sometimes cynical world!",
    "You are a true role model for all to aspire to, and we are all better for knowing you!",
    "Your kindness is truly a gift to the world, and we are all lucky to have you!",
    "You are a true shining star in the universe, and we are all in awe of your brilliance!",
    "Your generosity knows no bounds, and it is truly remarkable and inspiring!",
    "You are a true beacon of light in a sometimes dark world, and we are all grateful for your light!",
    "Your patience is truly commendable and admirable!",
    "You are a true pillar of strength for all who know you, and we are all grateful for your strength!",
    "Your humor is truly a delight to behold, and it is a true gift to all who know you!",
    "You are a true ray of sunshine in everyone's life, and we are all grateful for your warmth and light!",
    "Your wisdom is truly profound and inspiring, and it is a true gift to all who know you!",
    "You are a true gem in this world, and we are all lucky to have you in our lives!"
];

// Styled components
const FullPageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Full height of the viewport */
    background: linear-gradient(135deg, #f3e5f5, #e1bee7);
    color: #6a1b9a; /* Title color */
    text-align: center;
    padding: 20px; /* Added padding for small devices */
    box-sizing: border-box; /* Ensures padding is included in total width */
`;

const ComplimentBox = styled.div`
    background: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    max-width: 400px;
    width: 100%; /* Make it responsive */

    @media (max-width: 480px) {
        padding: 20px; /* Less padding on smaller screens */
    }
`;

const Button = styled.button`
    padding: 10px 20px;
    font-size: 18px;
    background-color: #7e57c2;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;

    &:hover {
        background-color: #5e35b1;
        transform: translateY(-2px);
    }

    @media (max-width: 480px) {
        font-size: 16px; /* Smaller font size for mobile */
        padding: 8px 16px; /* Less padding on smaller screens */
    }
`;

const ComplimentText = styled.p`
    margin-top: 20px;
    font-size: 22px;
    color: #4a148c;
    font-weight: bold;

    @media (max-width: 480px) {
        font-size: 18px; /* Smaller font size for mobile */
    }
`;

const InitialPrompt = styled.p`
    margin: 20px 0;
    font-size: 18px;
    color: #6a1b9a; /* Prompt text color */

    @media (max-width: 480px) {
        font-size: 16px; /* Smaller font size for mobile */
    }
`;

const Compliment = () => {
    const [compliment, setCompliment] = useState("");

    const handleClick = () => {
        // Randomly select a compliment
        const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
        setCompliment(randomCompliment);
    };

    return (
        <FullPageContainer>
            <ComplimentBox>
                <Lottie 
                    animationData={girlSittingAnimation} 
                    loop={true} // Set to true for continuous animation
                    style={{ height: '150px', width: '150px', margin: '0 auto' }} // Adjust size as needed
                />
                <h1>Uma's Compliment Generator</h1>
                <Button onClick={handleClick}>Get a Compliment</Button>
                <InitialPrompt>
                    {compliment ? compliment : "Click the button to get a compliment"}
                </InitialPrompt>
            </ComplimentBox>
        </FullPageContainer>
    );
};

export default Compliment;





// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';

// // List of compliments
// const compliments = [
//     "You are amazing!",
//     "You're doing great!",
//     "You have a great sense of humor!",
//     "You are a wonderful friend!",
//     "You are incredibly talented!",
//     "You light up the room!",
//     "You are a true gift to those around you!",
// ];

// // Styled components
// const FullPageContainer = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 100vh;
//     background: linear-gradient(135deg, #f3e5f5, #e1bee7);
//     color: #6a1b9a;
//     text-align: center;
// `;

// const ComplimentBox = styled.div`
//     background: white;
//     padding: 30px;
//     border-radius: 10px;
//     box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
//     max-width: 400px;
//     width: 100%;
//     transition: transform 0.3s;
//     &:hover {
//         transform: scale(1.05);
//     }
// `;

// const Button = styled.button`
//     padding: 10px 20px;
//     font-size: 18px;
//     background-color: #7e57c2;
//     color: white;
//     border: none;
//     border-radius: 5px;
//     cursor: pointer;
//     transition: background-color 0.3s, transform 0.3s;

//     &:hover {
//         background-color: #5e35b1;
//         transform: translateY(-2px);
//     }
// `;

// const ComplimentText = styled.p`
//     margin-top: 20px;
//     font-size: 22px;
//     color: #4a148c;
//     font-weight: bold;
//     opacity: 0;
//     animation: fadeIn 0.5s forwards; /* Fade-in animation */
//     @keyframes fadeIn {
//         from {
//             opacity: 0;
//         }
//         to {
//             opacity: 1;
//         }
//     }
// `;

// const InitialPrompt = styled.p`
//     margin: 20px 0;
//     font-size: 18px;
//     color: #6a1b9a;
// `;

// const ShareButton = styled.a`
//     display: inline-block;
//     margin-top: 10px;
//     padding: 10px 20px;
//     font-size: 16px;
//     background-color: #1da1f2; /* Twitter blue */
//     color: white;
//     text-decoration: none;
//     border-radius: 5px;
//     transition: background-color 0.3s;

//     &:hover {
//         background-color: #0d95e8;
//     }
// `;

// const Compliment = () => {
//     const [compliment, setCompliment] = useState("");

//     useEffect(() => {
//         // Get the last compliment from local storage if available
//         const lastCompliment = localStorage.getItem('lastCompliment');
//         if (lastCompliment) {
//             setCompliment(lastCompliment);
//         }
//     }, []);

//     const handleClick = () => {
//         // Randomly select a compliment
//         const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
//         setCompliment(randomCompliment);
//         localStorage.setItem('lastCompliment', randomCompliment); // Save to local storage
//     };

//     const handleShare = () => {
//         const tweet = encodeURIComponent(compliment);
//         const twitterUrl = `https://twitter.com/intent/tweet?text=${tweet}`;
//         window.open(twitterUrl, '_blank'); // Open Twitter share dialog
//     };

//     return (
//         <FullPageContainer>
//             <ComplimentBox>
//                 <h1>Abhishree's Compliment Generator</h1>
//                 <InitialPrompt>
//                     {compliment ? compliment : "Click the button to get a compliment"}
//                 </InitialPrompt>
//                 <Button onClick={handleClick}>Get a Compliment</Button>
//                 {compliment && (
//                     <>
//                         <ComplimentText>{compliment}</ComplimentText>
//                         <ShareButton href="#" onClick={handleShare}>Share on Twitter</ShareButton>
//                     </>
//                 )}
//             </ComplimentBox>
//         </FullPageContainer>
//     );
// };

// export default Compliment;
