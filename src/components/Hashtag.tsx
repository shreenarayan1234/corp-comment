import React from "react";
import HashtagItem from './HashtagItem';
import { useFeedbackItemsContext } from "./FeedbackItemsContextProvider";

const Hashtag = () => {
  const {uniqueCompanyList, setSelectedCompany} = useFeedbackItemsContext();
  return (
    <div>
      <ul className="hashtags">
        {uniqueCompanyList.map((company) => (
          <HashtagItem
          key={company}
          company={company}
          setSelectedCompany={setSelectedCompany}/>
        ))}
      </ul>
    </div>
  );
};

export default Hashtag;
