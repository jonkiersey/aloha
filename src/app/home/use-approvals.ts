import { useEffect, useState } from "react";

const useApprovals = () => {
  const [approvals, setApprovals] = useState<number | null>(null);
  const [approvalLoading, setApprovalLoading] = useState(false);
  const [userClickCounter, setUserClickCounter] = useState(0);

  useEffect(() => {
    const getApprovals = async () => {
      const response = await fetch("/api/jon-approval");
      const data = await response.json();
      setApprovals(data.count);
    };
    getApprovals();
  }, []);

  const handleApproval = async () => {
    setApprovalLoading(true);
    setUserClickCounter((prev) => prev + 1);
    const response = await fetch("/api/jon-approval", {
      method: "POST",
    });
    if (response.ok) {
      const data = await response.json();
      setApprovals(data.count);
    }
    setApprovalLoading(false);
  };

  return { approvals, approvalLoading, handleApproval, userClickCounter };
};

export default useApprovals;
