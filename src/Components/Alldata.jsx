import SmsIcon from '@mui/icons-material/Sms';
import TelegramIcon from '@mui/icons-material/Telegram';
import MailIcon from '@mui/icons-material/Mail';
import ClearIcon from '@mui/icons-material/Clear';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';



// Edu
const Sec3 = [
    {
        key: 0,
        icon: <SmsIcon className='mt-3' style={{color: "#938CFF",border: "1px solid #d3d1ff",borderRadius: "40%",backgroundColor: "#d3d1ff" }}/>,
        title: <h2 className='mt-2 ms-2' style={{ color: "#938CFF", fontWeight: "bold" }}>20</h2>,
    },
    {
        key: 1,
        icon: <TelegramIcon className='mt-3' style={{ color: "#63FFA5",border: "1px solid #DFFFED",borderRadius: "50%",backgroundColor: "#DFFFED"}} />,
        title: <h2 className='mt-2 ms-2' style={{ color: "#63FFA5", fontWeight: "bold" }}>17</h2>
    },
    {
        key: 2,
        icon: <MailIcon className='mt-3' style={{ color: "#FFB978",border: "1px solid #FFEAD6",borderRadius: "50%",backgroundColor: "#FFEAD6" }} />,
        title:<h2 className='mt-2 ms-2' style={{ color: "#FFB978", fontWeight: "bold" }}>12</h2>,
    },
    {
        key: 3,
        icon: <TelegramIcon className='mt-3' style={{ color: "#FF4848",border: "1px solid #ffc8c8",borderRadius: "50%",backgroundColor: "#ffc8c8"}}/>,
        title: <h2 className='mt-2 ms-2' style={{ color: "#FF4848", fontWeight: "bold" }}>156</h2>,
    },
    {
        key: 4,
        icon: <ClearIcon className='mt-3' style={{ color: "#944EFF",border: "1px solid #E9DBFF",borderRadius: "50%",backgroundColor: "#E9DBFF" }} />,
        title: <h2 className='mt-2 ms-2' style={{ color: "#938CFF", fontWeight: "bold" }}>3</h2>,
    },

]
const Sec4 = [
    {
        key: 0,
        icon: <FiberManualRecordIcon className='ms-3' style={{ color: "green", fontSize: "14px" }} />,
        title: "Status Ok",
        H2: "96.7 %",
        P: "26,833,234 Messages"
    },
    {
        key: 1,
        icon:<FiberManualRecordIcon className='ms-3' style={{ color: "red", fontSize: "14px" }} />,
        title: "Messages with errors",
        H2: "3.3 %",
        P: "928,035 Messages"

    },
]
const Sec_4 = [
    {
        key: 0,
        icon: <FiberManualRecordIcon className='ms-3' style={{ color: "green", fontSize: "14px" }} />,       
        title: "Received",
        H2: "99.1 %",
        P: "36,580 Messages"
    },
    {
        key: 1,
        icon:<FiberManualRecordIcon className='ms-3' style={{ color: "red", fontSize: "14px" }} />,
        title: "Failed",
        H2: "0.9 %",
        P: "334 Messages"

    },
    {
        key: 2,
        icon:<FiberManualRecordIcon className='ms-3' style={{ color: "#FFB978", fontSize: "14px" }} />,
        title: "Opt-outs",
        H2: "0.1 %",
        P: "45 Messages"

    },
]
const Samp =[
    {
        key:0,
        name: "temp1",
        message: "message1"
    },
    {
        key:1,
        name: "temp2",
        message: "message2"
    },
    {
        key:2,
        name: "temp3",
        message: "message3"
    }
]
const Examp =[
    {
        key:0,
        sub: "Black Friday",
        schedule: "22/07/2022 12:00 am",
        status: "Finished",
    },
    {
        key:1,
        sub: "Valentine Day campaign",
        schedule: "22/07/2022 12:00 am",
        status: "Progress",
    },
    {
        key:2,
        sub: "Mother Day campaign",
        schedule: "22/07/2022 12:00 am",
        status: "scheduled",
    },
    {
        key:3,
        sub: "Remarketing campaign",
        schedule: "22/07/2022 12:00 am",
        status: "In progress",
    }
]
const Mess =[
    {
        key:0,
        Date: "May 22,2022 13:23",
        From: "017000000000",
        To: "017000000000",
        Direction: "Inbound",
        Status: "Delivered",
        Errors: "-",
        Logs: "View Debug Logs" ,
    },
    {
        key:1,
        Date: "May 22,2022 13:23",
        From: "017000000000",
        To: "017000000000",
        Direction: "Inbound",
        Status: "Delivered",
        Errors: "-",
        Logs: "View Debug Logs" ,
    },
    {
        key:2,
        Date: "May 22,2022 13:23",
        From: "017000000000",
        To: "017000000000",
        Direction: "Inbound",
        Status: "Delivered",
        Errors: "-",
        Logs: "View Debug Logs" ,
    },
    {
        key:3,
        Date: "May 22,2022 13:23",
        From: "017000000000",
        To: "017000000000",
        Direction: "Outbound",
        Status: "Recieved",
        Errors: "-",
        Logs: "View Debug Logs" ,
    },
    {
        key:4,
        Date: "May 22,2022 13:23",
        From: "017000000000",
        To: "017000000000",
        Direction: "Inbound",
        Status: "Delivered",
        Errors: "-",
        Logs: "View Debug Logs" ,
    },
    {
        key:5,
        Date: "May 22,2022 13:23",
        From: "017000000000",
        To: "017000000000",
        Direction: "Inbound",
        Status: "Sent",
        Errors: "-",
        Logs: "View Debug Logs" ,
    },
    {
        key:6,
        Date: "May 22,2022 13:23",
        From: "017000000000",
        To: "017000000000",
        Direction: "Outbound",
        Status: "Recieved",
        Errors: "-",
        Logs: "View Debug Logs" ,
    },
    {
        key:7,
        Date: "May 22,2022 13:23",
        From: "017000000000",
        To: "017000000000",
        Direction: "Outbound",
        Status: "Recieved",
        Errors: "-",
        Logs: "View Debug Logs" ,
    },
    {
        key:8,
        Date: "May 22,2022 13:23",
        From: "017000000000",
        To: "017000000000",
        Direction: "Outbound",
        Status: "Recieved",
        Errors: "-",
        Logs: "View Debug Logs" ,
    },
    {
        key:9,
        Date: "May 22,2022 13:23",
        From: "017000000000",
        To: "017000000000",
        Direction: "Outbound",
        Status: "Recieved",
        Errors: "-",
        Logs: "View Debug Logs" ,
    },
    {
        key:10,
        Date: "May 22,2022 13:23",
        From: "017000000000",
        To: "017000000000",
        Direction: "Outbound",
        Status: "Recieved",
        Errors: "-",
        Logs: "View Debug Logs" ,
    },
]
export {
    // 
    Sec3,
    Sec4,
    Sec_4,
    Samp,
    Examp,
    Mess



}  