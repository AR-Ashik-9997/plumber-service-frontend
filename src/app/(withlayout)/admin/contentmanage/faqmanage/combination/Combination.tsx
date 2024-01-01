"use client";
import { useEffect, useState } from "react";
import UpdateFaqs from "@/components/ContentManage/UpdateFaq";
import CreateFaqs from "@/components/ContentManage/CreateFaqs";
import { useGetSinglefaqQuery } from "@/redux/api/faqApi";

const Combination = () => {
  const [changeUi, setChangeUi] = useState<boolean>(false);
  const { data } = useGetSinglefaqQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 10000,
  });
  useEffect(() => {
    if (!!data) {
      setChangeUi(true);
    }
  }, [changeUi, data]);

  return <div>{data?.length>0 ? <UpdateFaqs /> : <CreateFaqs />}</div>;
};

export default Combination;
