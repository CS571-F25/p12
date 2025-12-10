import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";

export default function EventScheduleCard() {
    const schedule = [
        { start: "8:00 AM", end: "", duration: "", event: "Deliver Breakfast" },
        { start: "9:00 AM", end: "9:25 AM", duration: "0:25", event: "Walk to Memorial Union" },
        { start: "9:30 AM", end: "", duration: "", event: "Arrive at dressing room" },
        { start: "9:30 AM", end: "9:35 AM", duration: "0:05", event: "Dressing Room + Walk to Warm-up" },
        { start: "9:35 AM", end: "9:50 AM", duration: "0:15", event: "Warm Up" },
        { start: "9:50 AM", end: "9:55 AM", duration: "0:05", event: "Walk to Tech-Time" },
        { start: "10:00 AM", end: "10:20 AM", duration: "0:20", event: "Tech Time" },
        { start: "10:20 AM", end: "10:25 AM", duration: "0:05", event: "Walk to viewing room" },
        { start: "10:25 AM", end: "10:45 AM", duration: "0:20", event: "Viewing time" },
        { start: "10:45 AM", end: "10:50 AM", duration: "0:05", event: "Walk back to dressing room" },
        { start: "10:50 AM", end: "10:55 AM", duration: "0:05", event: "Clean up and leave dressing room" },
        { start: "10:55 AM", end: "", duration: "", event: "Walk back to hotel" },
        { start: "12:15 PM", end: "1:00 PM", duration: "0:45", event: "Lunch + Start getting Ready" },
        { start: "1:00 PM", end: "5:00 PM", duration: "4:00", event: "Get ready for the show" },
        { start: "1:00 PM", end: "4:30 PM", duration: "", event: "Pagh Tying" },
        { start: "5:00 PM", end: "5:15 PM", duration: "0:15", event: "Walk to Mem U" },
        { start: "5:15 PM", end: "5:55 PM", duration: "0:40", event: "Warm Up" },
        { start: "6:24 PM", end: "6:29 PM", duration: "0:05", event: "Head Backstage" },
        { start: "6:29 PM", end: "6:36 PM", duration: "0:07", event: "Wait Backstage" },
        { start: "6:36 PM", end: "6:41 PM", duration: "0:05", event: "Sidestage" },
        { start: "6:41 PM", end: "6:51 PM", duration: "0:10", event: "Set up + PERFORMANCE + Clean Up" },
        { start: "6:51 PM", end: "6:56 PM", duration: "0:05", event: "Head to Dressing Room" },
        { start: "6:56 PM", end: "7:01 PM", duration: "0:05", event: "Clear out dressing room and head to the balcony" },
        { start: "6:32 PM", end: "8:00 PM", duration: "1:28", event: "Watch Performances" },
        { start: "6:55 PM", end: "7:12 PM", duration: "0:17", event: "Intermission" },
        { start: "8:00 PM", end: "8:26 PM", duration: "0:26", event: "File in show order in dressing room for awards" },
        { start: "8:26 PM", end: "8:33 PM", duration: "0:07", event: "File on stage for awards" },
        { start: "8:33 PM", end: "8:38 PM", duration: "0:05", event: "" },
        { start: "8:39 PM", end: "8:49 PM", duration: "0:10", event: "Awards" },
        { start: "8:49 PM", end: "9:19 PM", duration: "0:30", event: "Quick Pictures, Get Props, Walk back to Hotel" },
        { start: "9:15 PM", end: "9:24 PM", duration: "0:09", event: "Judges feedback" },
    ];

    return (
        <Card className="shadow-sm my-5">
            <Card.Body>
                <h2 className="text-center mb-4 fw-bold">Event Schedule</h2>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Start Time</th>
                            <th>End Time</th>
                            <th>Duration</th>
                            <th>Event</th>
                        </tr>
                    </thead>
                    <tbody>
                        {schedule.map((row, i) => (
                            <tr key={i}>
                                <td>{row.start}</td>
                                <td>{row.end}</td>
                                <td>{row.duration}</td>
                                <td>{row.event}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
}
