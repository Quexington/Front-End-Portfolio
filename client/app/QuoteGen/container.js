import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import QuoteGen from './component';

const mapStateToProps = (state) => {
  return {
    quotes: [
      {
        text: "Don’t kill if you can wound, don’t wound if you can subdue, don’t subdue, if you can pacify, and don’t raise a hand at all, until you’ve extended it.",
        author: "Wonder Woman"
      },
      {
        text: "The fight for freedom needs no more martyrs -- it needs victory -- it needs no more atrocities to stir our blood -- it is stirred!",
        author: "Black Panther"
      },
      {
        text: "The world of full of exceptional people. The people in the world who do kindness, or search for the truth despite their lives being at risk. The engineers, the teachers, the doctors, and adoptive parents, the scholars and the firemen, and yes, the journalists. People who risk everything for the sake of others and those who simply try to help those whose needed be greater than their own. Those people inspire me, not the other way around.",
        author: "Superman"
      },
      {
        text: "We're not just our failures. As much as they hurt, we learn from them. Then we go out there and do our best to make up for them-- Even though we never will. We save people. We save as many as we can to make up for the ones we couldn't. That's all we do.",
        author: "Spider-Man"
      },
      {
        text: "True happiness is found along a middle road. There lies the balance and the harmony-- with reason and emotion, not at war but hand in hand",
        author: "Aquaman"
      },
      {
        text: 'Doesn\'t matter if the whole country decides that something wrong is something right. This nation was founded on one principle above all else: The requirement that we stand up for what we believe, no matter the odds or the consequences. When the mob and the press and the whole world tell you to move, your job is to plant yourself like a tree beside the river of truth, and tell the whole world -- "No, YOU move.”',
        author: "Captain America"
      },
      {
        text: "Haven't you learned anything yet? Think about your own life -- everything you've done to keep your secret safe. You don't just wear the mask for yourself. It's for your wife... your parents... even for -- one day -- your children. There are animals out there. And when it comes to family, we can't always be there to defend them. But the mask will.",
        author: "Green Arrow"
      },
      {
        text: "This is saying our generation will never matter. But we have to matter. If we don't, there is no future worth saving.",
        author: "Ms. Marvel"
      },
      {
        text: "Sooner or later you have to turn and face it-- you made a mistake! Welcome to the human race, pal. It's your choice. If you let it, it will destroy you. But if you do let it, remember you had a choice... you just picked the easiest way. You didn't fall into that bottle. You crawled in and pulled the cork in after you!",
        author: "Green Lantern"
      },
      {
        text: "A true Defender never raises arms against an innocent, no matter how they threaten you",
        author: "Dr. Strange"
      },
      {
        text: "The future is worth it. All the pain. All the tears. The future is worth the fight.",
        author: "Martian Manhunter"
      },
      {
        text: "I can create a world without war. I can make a world without alcohol or drugs. Without hate or jealousy. But then it wouldn't be the world we live in. Nothing would be learned, nothing would be gained. We wouldn't advance as species",
        author: "Iron Man"
      },
    ],
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(QuoteGen);
