import { FeedbackItemType } from '@/lib/type';
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

type FeedbackItemsContextType={
    feedbackItems:FeedbackItemType[];
    isLoading: boolean;
    errorMessage:string;
    setSelectedCompany: (_:string)=>void;
    uniqueCompanyList: string[];
    filteredFeedbackItems: FeedbackItemType[];
    onAddToList:(_:string) =>void;
};

export const FeedbackItemsContext = createContext<FeedbackItemsContextType | null>(null);

const FeedbackItemsContextProvider = ({children}:{
    children:React.ReactNode;
}) => {

  const [feedbackItems, setFeedbackItems] = useState<FeedbackItemType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [selectedCompany, setSelectedCompany] = useState("");

  // const companyList = feedbackItems.map((item)=>item.company);
  // console.log({companyList});

  const companyList:string[] = useMemo(()=>{
    return feedbackItems.map((item)=>item.company);
  },[feedbackItems])

  const uniqueCompanyList = companyList?companyList.filter((company,index, array)=>{
    return array.indexOf(company) ===index;
  }):[];

  // const filteredFeedbackItems = selectedCompany ? feedbackItems.filter(FeedbackItem=>FeedbackItem.company ==selectedCompany):feedbackItems;
  const filteredFeedbackItems: FeedbackItemType[] = useMemo(() => {
    return selectedCompany
      ? feedbackItems.filter(
          (feedbackItem) => feedbackItem.company === selectedCompany
        )
      : feedbackItems;
  }, [feedbackItems, selectedCompany]);

  const onAddToList = async (text: string) => {
    // const text = "This college is good. #ria";
    const companyName = text
      .split(" ")
      .find((word) => word.includes("#"))
      ?.substring(1);

      if(!companyName) return;

    const newItem: FeedbackItemType = {
      id: new Date().getTime(),
      badgeLetter: companyName?.substring(0, 1).toUpperCase() ?? "",
      company: companyName?.toUpperCase() ?? "",
      daysAgo: 3,
      text: text,
      upvoteCount: 300,
    };
    setFeedbackItems((prev) => [...prev, newItem]);

     //post request
  await fetch(
    "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",{
      method:"POST",
      body:JSON.stringify(newItem),
      headers:{
        "Content-Type":"application/json",
        Accep:"application/json",
      }
    }
  );
  };


  useEffect(() => {
    const getFeedbackItems = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
        );
        if (!res.ok) {
          throw new Error();
        }

        const data = await res.json();
        setFeedbackItems(data.feedbacks);
      } catch (error) {
        setErrorMessage("Something went wrong. Please try again later!");
        console.warn(error);
      }

      setIsLoading(false);
    };

    getFeedbackItems();
  }, []);


  return (
    <FeedbackItemsContext.Provider value={{feedbackItems, errorMessage, filteredFeedbackItems, isLoading, onAddToList, setSelectedCompany, uniqueCompanyList}}>{children}</FeedbackItemsContext.Provider>
  )
}

export default FeedbackItemsContextProvider


export function useFeedbackItemsContext(){
  const context = useContext(FeedbackItemsContext);
  if(!context){
    throw new Error("FeedbackItem");
  }
  return context;
}