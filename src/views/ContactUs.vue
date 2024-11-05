<template lang="">
    <div id="reachme">
        <main class="container-fluid" contact >
        <div class="row">
            <section>
              
              <div class="section-header">
                <div class="container">
                  <h1 class="welcome">
                    Contact Me<i class="bi bi-person-lines-fill"></i>
                  </h1>
                  <p>If you’d like to connect or discuss opportunities, feel free to reach out! I’m always open to collaborating on exciting projects, sharing ideas, or answering any questions you may have about my work. Whether you’re interested in a potential partnership, have a project in mind, or simply want to say hello, don’t hesitate to get in touch. You can reach me directly via email or through the form provided. I look forward to hearing from you!

                  </p>
                </div>
              </div>
              
              <div class="container">
                <div class="row">
                  
                  <div class="contact-info" id="info">
                    <div class="contact-info-item">
                      <div class="contact-info-icon">
                        <i class="bi bi-geo-alt"></i>
                      </div>
                      
                      <div class="contact-info-content">
                        <h4>Address</h4>
                        <p> Mitchells Plain, <br/>7785</p>
                      </div>
                    </div>
                    
                    <div class="contact-info-item">
                      <div class="contact-info-icon">
                        <i class="bi bi-telephone"></i>
                      </div>
                      
                      <div class="contact-info-content">
                        <h4>Phone</h4>
                        <p>084 669 6215</p>
                      </div>
                    </div>
                    
                    <div class="contact-info-item">
                      <div class="contact-info-icon">
                        <i class="bi bi-envelope"></i>
                      </div>
                      
                      <div class="contact-info-content">
                        <h4>Email</h4>
                       <p>chelseaqjulie@gmail.com</p>
                      </div>
                    </div>
                  </div>
                  
                  <div class="contact-form">
                    <form 
                    action="https://formspree.io/f/xqkrjezj"
                    method="POST"
                     id="contact-form">
                      <h2>Send Message</h2>
                      <div class="input-box">
                        <input type="text" required="true" name="Full Name">
                        <span>Full Name</span>
                      </div>
                      
                      <div class="input-box">
                        <input type="email" required="true" name="Email">
                        <span>Email</span>
                      </div>
                      
                      <div class="input-box">
                        <textarea required="true" name="Message"></textarea>
                        <span>Message</span>
                      </div>
                      
                      <div class="input-box">
                        <input type="submit" id="submitBtn" value="Send" name="sub">
                      </div>

                      <div class="spinner-border text-primary d-none" role="status" id="spinner">
                        <span class="visually-hidden">Loading...</span>
                      </div>
                    </form>
                  </div>
                  
                </div>
              </div>
            </section>
        </div>
      </main>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
h2{
  color:#ceaa9a !important;
}

section {
  position: relative;
  z-index: 3;
  padding-top: 50px;
  padding-bottom: 50px;
}

.container {
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
}

.section-header {
  margin-bottom: 50px;
  text-align: center;
}

.section-header h2 {
  color: #FFF;
  font-weight: bold;
  font-size: 3em;
  margin-bottom: 20px;
}

.section-header p {
  color: #FFF;
}

.row  {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

.contact-info {
  width: 50%;
}

.contact-info-item {
  display: flex;
  margin-bottom: 30px;
}



.contact-info-icon {
  height: 70px;
  min-width: 70px;
  background-color: #fff;
  text-align: center;
  border-radius: 50%;
}

.contact-info-icon i {
  font-size: 30px;
  line-height: 70px;
}

.contact-info-content {
  margin-left: 20px;
}

.contact-info-content h4 {
  color: #ceaa9a;
  font-size: 1.4em;
  margin-bottom: 5px;
}

.contact-info-content p {
  color: #FFF;
  font-size: 1em;
}

.contact-form {
  background-color: #fff;
  padding: 40px;
  width: 45%;
  padding-bottom: 20px;
  padding-top: 20px;
}

.contact-form h2 {
  font-weight: bold;
  font-size: 2em;
  margin-bottom: 10px;
  color: #333;
}

.contact-form .input-box {
  position: relative;
  width: 100%;
  margin-top: 10px;
}

.contact-form .input-box input,
.contact-form .input-box textarea{
  width: 100%;
  padding: 5px 0;
  font-size: 16px;
  margin: 10px 0;
  border: none;
  border-bottom: 2px solid #333;
  outline: none;
  resize: none;
}

.contact-form .input-box span {
  position: absolute;
  left: 0;
  padding: 5px 0;
  font-size: 16px;
  margin: 10px 0;
  pointer-events: none;
  transition: 0.5s;
  color: #666;
}

.contact-form .input-box input:focus ~ span,
.contact-form .input-box textarea:focus ~ span{
  color: #e91e63;
  font-size: 12px;
  transform: translateY(-20px);
}

.contact-form .input-box input[type="submit"]
{
  width: 100%;
  background: #ceaa9a;
  color: #FFF;
  border: none;
  cursor: pointer;
  padding: 10px;
  font-size: 18px;
  border: 1px solid #a68476;
  transition: 0.5s;
}

.contact-form .input-box input[type="submit"]:hover
{
  background: #FFF;
  color: #a68476;
}

@media (max-width: 991px) {
  section {
    padding-top: 50px;
    padding-bottom: 50px;
  }
  
  .row {
    flex-direction: column;
  }
  
  .contact-info {
    margin-bottom: 40px;
    width: 50%;
    
  }
  
  .contact-form {
    width: 100%;
  }
}

#info {
  text-align: left;
}

#reachme{
    padding-top: 3rem;
}
    
</style>