import { useHistory } from "react-router";
import NewMeetupForm from "../components/layout/meetups/NewMeetupForm";
function NewMeetupPage() {
  const history = useHistory();
  function addMeetupHandler(meetupData) {
    fetch("https://react-app-d8447-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.replace("/");
    });
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>
    </section>
  );
}

export default NewMeetupPage;
