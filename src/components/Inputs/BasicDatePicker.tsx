import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Dayjs } from "dayjs";
import { colorMap } from "../../styleVars/colors";
export const BasicDatePicker = ({
    label,
    setDate,
}: {
    label: string;
    setDate: (date: string) => void;
}) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                label={label}
                onChange={(newDate: Dayjs | null) =>
                    newDate && setDate(newDate.format("YYYY-MM-DD"))
                }
                slotProps={{
                    layout: {
                        sx: {
                            backgroundColor: colorMap.orange300,
                        },
                    },
                }}
            />
        </LocalizationProvider>
    );
};
