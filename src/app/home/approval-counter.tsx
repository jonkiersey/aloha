import {
  Box,
  Button,
  CircularProgress,
  styled,
  Typography,
} from "@mui/material";
import { multiClickText } from "./utils";
import ApprovalsContext from "@app/contexts/approvals-context";
import { useContext } from "react";

const ApprovalButton = styled(Button)({
  height: 40,
  width: 200,
  alignSelf: "center",
  display: "inline-flex",
  marginTop: 16,
});

const ApprovalBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  border: "1px solid",
  borderColor: theme.palette.primary.main,
  borderRadius: 8,
  padding: 16,
  marginTop: 64,
  [theme.breakpoints.down("sm")]: {
    marginTop: 16,
  },
}));

const ApprovalCounter = () => {
  const { approvalLoading, handleApproval, approvals, userClickCounter } =
    useContext(ApprovalsContext);
  return (
    approvals !== null && (
      <ApprovalBox>
        <Typography variant="body1">
          <strong>{approvals}</strong> people have endorsed my abilities as a
          web developer. Click the button below to add your endorsement!
        </Typography>
        <Typography variant="body2">
          {multiClickText(userClickCounter) || "\u00A0"}
        </Typography>
        <ApprovalButton
          onClick={handleApproval}
          disabled={approvalLoading}
          variant="contained"
        >
          {approvalLoading ? <CircularProgress size={24} /> : "Endorse"}
        </ApprovalButton>
      </ApprovalBox>
    )
  );
};

export default ApprovalCounter;
