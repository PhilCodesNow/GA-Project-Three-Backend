import React from 'react';
import ReactDOM from 'react-dom';

export default (props) => {
    //State for form data
    const [formData, setFormData] = React.useState(props.initial);
    
    //useEffect to update the data when state changes
    React.useEffect(() => {
        setFormData(props.initial);
        }, [props.initial]
    );

    //handlechange function
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };
    
    return (
        <>
            <div className="formContainer">
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
                    name="phone"
                    value={formData.contactInfo.phone}
                    onChange={handleChange}
                />
                <label>Email:</label>
                <input
                    type="text"
                    name="email"
                    value={formData.contactInfo.email}
                    onChange={handleChange}
                />
                <label>LinkedIn:</label>
                <input
                    type="text"
                    name="linkedinId"
                    value={formData.contactInfo.linkedinId}
                    onChange={handleChange}
                />
                <br />
                <h3><u>First Met Information</u></h3>
                <label>Event Name:</label>
                <input
                    type="text"
                    name="eventName"
                    value={formData.firstMeetContact.eventName}
                    onChange={handleChange}
                />
                <label>Event Date:</label>
                <input
                    type="date"
                    name="eventDate"
                    value={formData.firstMeetContact.eventDate}
                    onChange={handleChange}
                />
                <label>Notes From Event:</label>
                <input
                    type="textarea"
                    name="otherInfo"
                    value={formData.firstMeetContact.otherInfo}
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
                <button
                    onClick={() => {
                        props.handleSubmit(formData);
                        setFormData(props.initial);
                    }}
                >
                    SUBMIT
                </button>
            </div>
        </>
    );
};