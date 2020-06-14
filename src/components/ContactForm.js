import React from 'react';
import ReactDOM from 'react-dom';

export default (props) => {

    //State for form data
    const [formData, setFormData] = React.useState(props.initial);

    //handlechange function
    const handleChange = (event) => {
        setFormData({ ...formData, [event.currentTarget.name]: event.currentTarget.value });
    };

    const nestifyData = () => {
        // Shallow copy
        const newData = Object.assign({}, formData)
        newData.contactInfo = {}
        newData.contactInfo.phone = newData.contactInfo_phone
        delete newData.contactInfo_phone
        newData.contactInfo.email = newData.contactInfo_email
        delete newData.contactInfo_email
        newData.contactInfo.linkedinId = newData.contactInfo_linkedinId
        delete newData.contactInfo_linkedinId
        newData.firstMeetContact = {}
        newData.firstMeetContact.eventName = newData.firstMeetContact_eventName
        delete newData.firstMeetContact_eventName
        newData.firstMeetContact.eventDate = newData.firstMeetContact_eventDate
        delete newData.firstMeetContact_eventDate
        newData.firstMeetContact.otherInfo = newData.firstMeetContact_otherInfo
        delete newData.firstMeetContact_otherInfo
        return newData
    }
    
    return (
        <>
            <div className="formContainer">
                <form onSubmit={(event) => {
                    event.preventDefault();
                    const nestified = nestifyData();
                    props.handleSubmit(nestified)
                }}>
                <label>Contact Name:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <br />
                <h3><u>Contact Information</u></h3>
                <label>Phone:</label>
                <input
                    type="text"
                    name="contactInfo_phone"
                    value={formData.contactInfo_phone}
                    onChange={handleChange}
                />
                <label>Email:</label>
                <input
                    type="text"
                    name="contactInfo_email"
                    value={formData.contactInfo_email}
                    onChange={handleChange}
                />
                <label>LinkedIn:</label>
                <input
                    type="text"
                    name="contactInfo_linkedinId"
                    value={formData.contactInfo_linkedinId}
                    onChange={handleChange}
                />
                <br />
                <h3><u>First Met Information</u></h3>
                <label>Event Name:</label>
                <input
                    type="text"
                    name="firstMeetContact_eventName"
                    value={formData.firstMeetContact_eventName}
                    onChange={handleChange}
                />
                <label>Event Date:</label>
                <input
                    type="date"
                    name="firstMeetContact_eventDate"
                    value={formData.firstMeetContact_eventDate}
                    onChange={handleChange}
                />
                <label>Notes From Event:</label>
                <input
                    type="textarea"
                    name="firstMeetContact_otherInfo"
                    value={formData.firstMeetContact_otherInfo}
                    onChange={handleChange}
                />
                <br />
                <label>Next Follow Up Date:</label>
                <input
                    type="date"
                    name="followUpDate"
                    value={formData.followUpDate}
                    onChange={handleChange}
                />
                <label>Conversation Notes:</label>
                <input
                    type="textarea"
                    name="conversationNotes"
                    value={formData.conversationNotes}
                    onChange={handleChange}
                />
                <input type="submit" value={props.submitText} />
                </form>
            </div>
        </>
    );
};