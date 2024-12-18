import React, { useState } from "react";
import "../../css/employee/mailbox.css";
import Navbar from "../../components/templetes/Navbar";
import Sidebar from "../../components/templetes/SideBar";
import Footer from '../../components/templetes/Footer';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";



const Mailbox = () => {
  
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [formData, setFormData] = useState({
    to: "",
    subject: "",
    message: "",
    attachment: null,
  });
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAttachmentChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, attachment: file });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert("Email sent successfully!");
  //   setFormData({ to: "", subject: "", message: "", attachment: null });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(); // Prepare data for form submission
    formData.append('to', formData.to);
    formData.append('subject', formData.subject);
    formData.append('message', formData.message);
    if (formData.attachment) {
        formData.append('attachment', formData.attachment);
    }

    try {
        const response = await fetch('http://localhost:8800/send-email', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            alert('Email sent successfully!');
            setFormData({ to: '', subject: '', message: '', attachment: null }); // Reset form
        } else {
            const errorData = await response.json();
            alert(`Failed to send email: ${errorData.message}`);
        }
    } catch (error) {
        console.error('Error submitting form:', error);
        alert('Failed to send email.');
    }
};




  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <Navbar />
      <div className="d-flex flex-grow-1">
        <Sidebar sidebarVisible={sidebarVisible} />
        <div className="main-content">
          {/* Breadcrumb */}
          <p className="profile-breadcrumb">
            <span className="home">Home</span> / <span className="contact">Mail-Box</span>
          </p>
          <h2>Mail-Box</h2>

          {/* Form Container */}
          <div className="mailbox-container">
            <form onSubmit={handleSubmit}>
              {/* To Field */}
              <label htmlFor="to" className="input-label"></label>
              <input
                type="email"
                id="to"
                name="to"
                placeholder="To:"
                value={formData.to}
                onChange={handleChange}
                required
                className="mailbox-input"
              />

              {/* Subject Field */}
              <label htmlFor="subject" className="input-label"></label>
              <input
                type="text"
                id="subject"
                placeholder="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="mailbox-input"
              />

              {/* Message Field with Attachment */}
              <label htmlFor="message" className="input-label"></label>
              <div className="attachment-container">
                <label className="attachment-label">
                  <i className="fas fa-paperclip"></i>{" "}
                  {formData.attachment ? formData.attachment.name : "abc.pdf"}
                  <input
                    type="file"
                    onChange={handleAttachmentChange}
                    className="file-input"
                    name="attachment"
                  />
                </label>
              </div>
              <textarea
                id="message"
                name="message"
                placeholder="Type message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
                className="mailbox-textarea"
              ></textarea>

           {/* Submit Button */}
           <button type="submit" className="mailbox-submit-btn">
                Send
              </button>
            </form>
          </div>
        </div>
      </div> 
      {/* methana class name eka wenas kara  */}
      <div className="container3"> 
            <Footer />
        </div>
    </div>
  );
};
export default Mailbox;