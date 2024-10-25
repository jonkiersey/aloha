import useDebounce from "@app/hooks/use-debounce";
import { useEffect, useState } from "react";

const useApprovals = () => {
  const [approvals, setApprovals] = useState<number | null>(null);
  const [approvalLoading, setApprovalLoading] = useState(false);
  const [userClickCounter, setUserClickCounter] = useState(0);

  const [queuedClicks, setQueuedClicks] = useState(0);

  useDebounce({
    delayMS: 5000,
    callback: async () => {
      if (queuedClicks > 0) {
        const response = await fetch("/api/jon-approval", {
          body: JSON.stringify({ count: queuedClicks }),
          method: "POST",
        });
        if (response.ok) {
          const data = await response.json();
          setApprovals(data.count);
        }
        setQueuedClicks(0);
      }
    },
  });

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
    setQueuedClicks((prev) => prev + 1);
    setApprovals((prev) => (prev || 0) + 1);
    // give the tiniest delay to show something happening
    setTimeout(() => setApprovalLoading(false), 200);
  };

  return { approvals, approvalLoading, handleApproval, userClickCounter };
};

export default useApprovals;
