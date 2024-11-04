import useApprovals from "@app/hooks/use-approvals";
import { createContext } from "react";

const ApprovalsContext = createContext<ReturnType<typeof useApprovals>>({
  approvalLoading: false,
  approvals: null,
  handleApproval: () => Promise.resolve(),
  userClickCounter: 0,
});

export default ApprovalsContext;
