<template>
  <div class="page-container">
    <div class="logo-container"><img class="logo" src="https://www.k2united.com/images/k2unitedlogo.png"></div>

    <h1>
      Email Signature Generator
    </h1>
    <form>

      <label for="brand-selector">Brand *
        <select id="brand-selector" v-model="brand">
          <option disabled>-- Select Brand --</option>
          <option>K2United</option>
          <option>K2Share</option>
          <option>CareerSafe</option>
        </select></label>
      <label for="name">Full Name *
        <input id="name" type="text" v-model="name" placeholder="Firstname Lastname">
      </label>
      <label for="position">Position/Professional Title *
        <input id="position" type="text" v-model="position" placeholder="Director of Good Times">
      </label>
      <label for="certifications">Certifications (Comma seperated list)
        <input id="certifications" type="text" v-model="certs" placeholder="CERT, CERT, CERT, CERT, CERT">
      </label>
      <label for="mobile-phone">Mobile Phone
        <input id="mobile-phone" type="text" v-model="mobilePhone" placeholder="(999) 999-9999">
      </label>
      <label for="office-phone">Office Phone
        <input id="office-phone" type="text" v-model="officePhone" placeholder="(999) 999-9999">
      </label>
      <label for="fax">Fax Number
        <input id="fax" type="text" v-model="fax" placeholder="(999) 999-9999">
      </label>
      <div class="flex"> <button class="btn-reset">
          Reset
        </button>
        <button @click="buttonPress" type="button" class="btn">
          Copy to Clipboard
        </button>
      </div>
      <p id="btn-message"></p>
    </form>


    <div class="divider" v-if="brand !== '-- Select Brand --'"></div>


    <!-------------------------------- Start K2United Email Signature HTML------------------------------------->
    <div id="signature" v-if="brand === 'K2United'">
      <br>
      <table cellspacing="0" cellpadding="0" border="0"
        style="border-collapse: separate;table-layout: fixed;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;max-width:100%;"
        emb-background-style width="100%">
        <tbody>
          <tr>
            <td
              style="color:#00245A;font-size:11pt;mso-line-height-rule:exactly;line-height:1.2em;padding-bottom:1px;font-family:'Trade Gothic Next', Arial, Helvetica, sans-serif;">
              <p style="margin:0px;"><span style="font-weight:bold;color:#00245A;font-size:11pt;">{{ name }}<br
                    v-if="validateCerts(certs)">{{ formatCerts(certs) }}</span></p>
            </td>
          </tr>
          <tr>
            <td
              style="color:#545454;font-size:11pt;mso-line-height-rule:exactly;line-height:1.2em;padding-bottom:10px;font-family:'Trade Gothic Next', Arial, Helvetica, sans-serif;">
              <p style="margin:0px;"><span style="color:#545454;font-size:11pt;"><em>{{ position }}</em></span></p>
            </td>
          </tr>

          <tr>
            <td
              style="color:#545454;font-size:9pt;mso-line-height-rule:exactly;line-height:1.2em;padding-bottom:5px;font-family:'Trade Gothic Next', Arial, Helvetica, sans-serif;">
              <p style="margin:0px;"><span style="font-weight:bold;letter-spacing:1px;"><a href="https://k2united.com/"
                    style="color:#00245A;text-decoration:none;text-transform:uppercase;"
                    target="_blank">k2united.com</a></span></p>
            </td>
          </tr>

          <tr>
            <td
              style="color:#545454;font-size:9pt;mso-line-height-rule:exactly;line-height:1.2em;border-top:solid 1px #D3D3D3;padding-top:5px;font-family:'Trade Gothic Next', Arial, Helvetica, sans-serif;">
              <p style="margin:0px;"><span v-if="validatePhone(mobilePhone)" style="color:#545454;"><span
                    style="font-weight:bold;color:#545454;">Mobile:</span> <a :href="'tel:' + formatPhone(mobilePhone)"
                    style="color:#545454;text-decoration:none;" target="_blank">{{ formatPhone(mobilePhone) }}</a> <span
                    v-if="validatePhone(mobilePhone) && validatePhone(officePhone) || validatePhone(mobilePhone) && validatePhone(fax)"
                    style="color:#D3D3D3;">| </span>
                </span><span v-if="validatePhone(officePhone)" style="color:#545454;"><span
                    style="font-weight:bold;color:#545454;">Office: </span> <a :href="'tel:' + formatPhone(officePhone)"
                    style="color:#545454;text-decoration:none;" target="_blank">{{ formatPhone(officePhone) }}</a> <span
                    v-if="validatePhone(officePhone) && validatePhone(fax)" style="color:#D3D3D3;">| </span> </span><span
                  v-if="validatePhone(fax)" style="color:#545454;"><span style="font-weight:bold;color:#545454;">Fax:
                  </span> <a :href="'tel:' + formatPhone(fax)" style="color:#545454;text-decoration:none;"
                    target="_blank">{{ formatPhone(fax) }}</a></span></p>
              <p style="margin:0px;">1005 University Drive East, College Station, TX 77840</p>
            </td>
          </tr>

          <tr>
            <td
              style="color:#00245A;font-size:9pt;height:45px;padding-top:5px;padding-bottom:5px;font-family:'Trade Gothic Next', Arial, Helvetica, sans-serif;">
              <p style="margin:0px;"><a href="https://k2united.com/" style="border:0px;display:block;height:45px;"
                  target="_blank">
                  <img src="https://k2united.com/images/logo-k2united-email.png" width="195" height="45"
                    style="display:block;border:0px;" border="0" nosend="1" alt="K2United" /></a></p>
            </td>
          </tr>

          <tr>
            <td
              style="color:#545454;font-size:9pt;mso-line-height-rule:exactly;line-height:1.2em;padding-top:2px;border-top:solid 1px #D3D3D3;font-family:'Trade Gothic Next', Arial, Helvetica, sans-serif;">
              <p style="margin:0px;"><span style="color:#545454;">Certified Great Place to Work<sup>&reg;</sup> <span
                    style="color:#D3D3D3;">|</span> Certified Veteran-Owned Small Business (VOSB)</span></p>
            </td>
          </tr>
          <tr>
            <td style="color:#545454;font-size:9pt;height:21px;padding-top:5px;font-family:Arial, Helvetica, sans-serif;">
              <p style="margin:0px;"><a href="https://www.facebook.com/K2ULLC/" target="_blank"
                  style="display:inline-block;padding-right:9px;vertical-align:middle;"><img
                    src="https://k2united.com/images/social-facebook.png" width="21" height="21"
                    style="border:0px;display:inline-block;" border="0" nosend="1" alt="Facebook" /></a>&nbsp;<a
                  href="https://www.linkedin.com/company/42596" target="_blank"
                  style="display:inline-block;padding-right:9px;vertical-align:middle;"><img
                    src="https://k2united.com/images/social-linkedin.png" width="21" height="21"
                    style="border:0px;display:inline-block;" border="0" nosend="1" alt="LinkedIn" /></a></p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-------------------------------- End K2United Email Signature HTML------------------------------------->

    <!-------------------------------- Start K2Share Email Signature HTML------------------------------------->
    <div id="signature" v-if="brand === 'K2Share'">
      <br>
      <table cellspacing="0" cellpadding="0" border="0"
        style="border-collapse: separate;table-layout: fixed;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;max-width:100%;"
        emb-background-style width="100%">
        <tbody>
          <tr>
            <td
              style="color:#231F20;font-size:11pt;mso-line-height-rule:exactly;line-height:1.2em;padding-bottom:1px;font-family:'Lato', Arial, Helvetica, sans-serif;">
              <p style="margin:0px;"><span style="font-weight:bold;color:#231F20;font-size:11pt;">{{ name }}<br
                    v-if="validateCerts(certs)">{{ formatCerts(certs) }}</span></p>
            </td>
          </tr>
          <tr>
            <td
              style="color:#545454;font-size:11pt;mso-line-height-rule:exactly;line-height:1.2em;padding-bottom:10px;font-family:'Lato', Arial, Helvetica, sans-serif;">
              <p style="margin:0px;"><span style="color:#545454;font-size:11pt;"><em>{{ position }}</em></span></p>
            </td>
          </tr>
          <tr>
            <td
              style="color:#545454;font-size:9pt;mso-line-height-rule:exactly;line-height:1.2em;padding-bottom:5px;font-family:'Lato', Arial, Helvetica, sans-serif;">
              <p style="margin:0px;"><span style="font-weight:bold;letter-spacing:1px;text-transform:uppercase;"><a
                    href="https://www.k2share.com/" style="color:#231F20;text-decoration:none;"
                    target="_blank">k2share.com</a></span> <span style="color:#D3D3D3;">|</span> A <a
                  href="https://www.k2united.com" style="color:#545454;text-decoration: none;">K2United</a> Brand</p>
            </td>
          </tr>
          <tr>
            <td
              style="color:#545454;font-size:9pt;mso-line-height-rule:exactly;line-height:1.2em;border-top:solid 1px #D3D3D3;padding-top:5px;font-family:'Lato', Arial, Helvetica, sans-serif;">
              <p style="margin:0px;"><span v-if="validatePhone(mobilePhone)" style="color:#545454;"><span
                    style="font-weight:bold;color:#545454;">Mobile:</span> <a :href="'tel:' + formatPhone(mobilePhone)"
                    style="color:#545454;text-decoration:none;" target="_blank">{{ formatPhone(mobilePhone) }}</a> <span
                    v-if="validatePhone(mobilePhone) && validatePhone(officePhone) || validatePhone(mobilePhone) && validatePhone(fax)"
                    style="color:#D3D3D3;">| </span>
                </span><span v-if="validatePhone(officePhone)" style="color:#545454;"><span
                    style="font-weight:bold;color:#545454;">Office: </span> <a :href="'tel:' + formatPhone(officePhone)"
                    style="color:#545454;text-decoration:none;" target="_blank">{{ formatPhone(officePhone) }}</a> <span
                    v-if="validatePhone(officePhone) && validatePhone(fax)" style="color:#D3D3D3;">| </span> </span><span
                  v-if="validatePhone(fax)" style="color:#545454;"><span style="font-weight:bold;color:#545454;">Fax:
                  </span> <a :href="'tel:' + formatPhone(fax)" style="color:#545454;text-decoration:none;"
                    target="_blank">{{ formatPhone(fax) }}</a></span></p>
              <p style="margin:0px;">1005 University Drive East, College Station, TX 77840</p>
            </td>
          </tr>

          <tr>
            <td
              style="color:#231F20;font-size:9pt;height:36px;padding-top:10px;padding-bottom:10px;font-family:'Lato', Arial, Helvetica, sans-serif;">
              <p style="margin:0px;"><a href="https://www.k2share.com/" style="border:0px;display:block;height:36px;"
                  target="_blank">
                  <img src="https://www.k2share.com/content/graphics/logos/logo-k2share-email.png" width="178" height="36"
                    style="display:block;border:0px;" border="0" nosend="1" alt="K2Share" /></a></p>
            </td>
          </tr>

          <tr>
            <td
              style="color:#545454;font-size:9pt;mso-line-height-rule:exactly;line-height:1.2em;padding-top:2px;border-top:solid 1px #D3D3D3;font-family:'Lato', Arial, Helvetica, sans-serif;">
              <p style="margin:0px;"><span style="color:#545454;">Certified SBA HUBZone <span
                    style="color:#D3D3D3;">|</span> Certified Great Place to Work<sup>&reg;</sup> <span
                    style="color:#D3D3D3;">|</span> Certified Veteran-Owned Small Business (VOSB)</span></p>
            </td>
          </tr>
          <tr>
            <td style="color:#545454;font-size:9pt;height:21px;padding-top:5px;font-family:Arial, Helvetica, sans-serif;">
              <p style="margin:0px;"><a href="https://www.facebook.com/K2SLLC/" target="_blank"
                  style="display:inline-block;padding-right:9px;vertical-align:middle;"><img
                    src="https://k2united.com/images/social-facebook.png" width="21" height="21"
                    style="border:0px;display:inline-block;" border="0" nosend="1" alt="Facebook" /></a>&nbsp;<a
                  href="https://www.linkedin.com/company/89973752" target="_blank"
                  style="display:inline-block;padding-right:9px;vertical-align:middle;"><img
                    src="https://k2united.com/images/social-linkedin.png" width="21" height="21"
                    style="border:0px;display:inline-block;" border="0" nosend="1" alt="LinkedIn" /></a></p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-------------------------------- End K2Share Email Signature HTML------------------------------------->

    <!-------------------------------- Start CareerSafe Email Signature HTML------------------------------------->
    <div id="signature" v-if="brand === 'CareerSafe'">
      <br>
      <table cellspacing="0" cellpadding="0" border="0"
        style="border-collapse: separate;table-layout: fixed;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;max-width:100%;"
        emb-background-style width="100%">
        <tbody>
          <tr>
            <td
              style="color:#044C7A;font-size:11pt;mso-line-height-rule:exactly;line-height:1.2em;padding-bottom:1px;font-family:'Open Sans', Arial, Helvetica, sans-serif;">
              <p style="margin:0px;"><span style="font-weight:bold;color:#044C7A;font-size:11pt;">{{ name }}<br
                    v-if="validateCerts(certs)">{{ formatCerts(certs) }}</span></p>
            </td>
          </tr>
          <tr>
            <td
              style="color:#545454;font-size:11pt;mso-line-height-rule:exactly;line-height:1.2em;padding-bottom:10px;font-family:'Open Sans', Arial, Helvetica, sans-serif;">
              <p style="margin:0px;"><span style="color:#545454;font-size:11pt;"><em>{{ position }}</em></span></p>
            </td>
          </tr>
          <tr>
            <td
              style="color:#545454;font-size:9pt;mso-line-height-rule:exactly;line-height:1.2em;padding-bottom:5px;font-family:'Open Sans', Arial, Helvetica, sans-serif;">
              <p style="margin:0px;"><span style="font-weight:bold;"><a href="https://careersafeonline.com/"
                    style="color:#044C7A;text-decoration:none;text-transform:uppercase;"
                    target="_blank">careersafeonline.com</a></span> <span style="color:#D3D3D3;">|</span>A <a
                  href="https://www.k2united.com" style="color:#545454;text-decoration: none;">K2United</a> Brand</p>
            </td>
          </tr>
          <tr>
            <td
              style="color:#545454;font-size:9pt;mso-line-height-rule:exactly;line-height:1.2em;border-top:solid 1px #D3D3D3;padding-top:5px;font-family:'Open Sans', Arial, Helvetica, sans-serif;">
              <p style="margin:0px;"><span v-if="validatePhone(mobilePhone)" style="color:#545454;"><span
                    style="font-weight:bold;color:#545454;">Mobile:</span> <a :href="'tel:' + formatPhone(mobilePhone)"
                    style="color:#545454;text-decoration:none;" target="_blank">{{ formatPhone(mobilePhone) }}</a> <span
                    v-if="validatePhone(mobilePhone) && validatePhone(officePhone) || validatePhone(mobilePhone) && validatePhone(fax)"
                    style="color:#D3D3D3;">| </span>
                </span><span v-if="validatePhone(officePhone)" style="color:#545454;"><span
                    style="font-weight:bold;color:#545454;">Office: </span> <a :href="'tel:' + formatPhone(officePhone)"
                    style="color:#545454;text-decoration:none;" target="_blank">{{ formatPhone(officePhone) }}</a> <span
                    v-if="validatePhone(officePhone) && validatePhone(fax)" style="color:#D3D3D3;">| </span> </span><span
                  v-if="validatePhone(fax)" style="color:#545454;"><span style="font-weight:bold;color:#545454;">Fax:
                  </span> <a :href="'tel:' + formatPhone(fax)" style="color:#545454;text-decoration:none;"
                    target="_blank">{{ formatPhone(fax) }}</a></span></p>
              <p style="margin:0px;">1005 University Drive East, College Station, TX 77840</p>
            </td>
          </tr>

          <tr>
            <td
              style="color:#044C7A;font-size:9pt;height:36px;padding-top:10px;padding-bottom:10px;font-family:'Open Sans', Arial, Helvetica, sans-serif;">
              <p style="margin:0px;"><a href="https://careersafeonline.com/" style="border:0px;display:block;height:36px;"
                  target="_blank">
                  <img src="https://www.careersafeonline.com/images/logo-careersafe-email.png" width="200" height="36"
                    style="display:block;border:0px;" border="0" nosend="1" alt="CareerSafe" /></a></p>
            </td>
          </tr>

          <tr>
            <td
              style="color:#545454;font-size:9pt;mso-line-height-rule:exactly;line-height:1.2em;padding-top:2px;border-top:solid 1px #D3D3D3;font-family:'Open Sans', Arial, Helvetica, sans-serif;">
              <p style="margin:0px;"><span style="color:#545454;">Certified Great Place to Work<sup>&reg;</sup></span></p>
            </td>
          </tr>
          <tr>
            <td style="color:#545454;font-size:9pt;height:21px;padding-top:5px;font-family:Arial, Helvetica, sans-serif;">
              <p style="margin:0px;"><a href="https://www.facebook.com/CareerSafe" target="_blank"
                  style="display:inline-block;padding-right:9px;vertical-align:middle;"><img
                    src="https://k2united.com/images/social-facebook.png" width="21" height="21"
                    style="border:0px;display:inline-block;" border="0" nosend="1" alt="Facebook" /></a>&nbsp;<a
                  href="https://www.linkedin.com/company/2584998" target="_blank"
                  style="display:inline-block;padding-right:9px;vertical-align:middle;"><img
                    src="https://k2united.com/images/social-linkedin.png" width="21" height="21"
                    style="border:0px;display:inline-block;" border="0" nosend="1" alt="LinkedIn" /></a>&nbsp;<a
                  href="https://www.instagram.com/careersafe/" target="_blank"
                  style="display:inline-block;padding-right:9px;vertical-align:middle;"><img
                    src="https://k2united.com/images/social-instagram.png" width="21" height="21"
                    style="border:0px;display:inline-block;" border="0" nosend="1" alt="Instagram" /></a>&nbsp;<a
                  href="https://twitter.com/CareerSafe" target="_blank"
                  style="display:inline-block;padding-right:9px;vertical-align:middle;"><img
                    src="https://k2united.com/images/social-twitter.png" width="21" height="21"
                    style="border:0px;display:inline-block;" border="0" nosend="1" alt="Twitter" /></a>&nbsp;</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-------------------------------- End CareerSafe Email Signature HTML------------------------------------->
  </div>
</template>

<script>
export default {
  data() {
    return {
      brand: "-- Select Brand --",
      name: "", // {{ name }}<br v-if="validateCerts(certs)">{{ formatCerts(certs) }}
      position: "",
      certs: "", //optional
      mobilePhone: "", //optional :href="'tel:' + formatPhone(mobilePhone)"
      officePhone: "", //optional :href="'tel:' + formatPhone(officePhone)"
      fax: "", //optional
    }
  },
  methods: {
    buttonPress() {
      this.validateReqs();
      const signature = document.querySelector("#signature");
      //document.getSelection().selectAllChildren(signature); //if using execCommand
      //document.execCommand("copy"); //execCommand is deprecated, ff users must manually enable ClipboardItem tho

      //Modern Clipboard API method
      const selection = [new ClipboardItem({
        "text/html": new Blob([signature.innerHTML], {
          type: "text/html",
        })
      })];

      navigator.clipboard.write(selection).then(() => {
        console.log('Content copied to clipboard');
        document.querySelector("#btn-message").innerHTML = "Signature Copied!";
        setTimeout(() => { document.querySelector("#btn-message").innerHTML = "" }, 2000)
      }, () => {
        console.error('Failed to copy');
        document.querySelector("#btn-message").innerHTML = "Signature Copy Failed";
      });
    },
    formatPhone(input) {
      const digits = input.match(/\d/g);
      return `(${digits[0] + digits[1] + digits[2]}) ${+ digits[3] + digits[4] + digits[5]}-${digits[6] + digits[7] + digits[8] + digits[9]}`;
    },
    validatePhone(input) {
      const phoneArray = input.match(/\d/g);
      return (phoneArray?.length === 10)
    },
    formatCerts(input) {
      const certArray = input.match(/([a-z\.])+/gi);
      return (certArray?.length > 2) ? certArray.join(", ") : (certArray) ? ", " + certArray.join(", ") : "";
    },
    validateCerts(input) {
      const certArray = input.match(/([a-z\.])+/gi);
      return (certArray?.length > 2)
    },
    validateReqs() {
      this.name ? null : console.log("Must use name");
      this.position ? null : console.log("Must use position")
    },

  }
}
</script>

<style>
body {
  background-color: rgb(0, 36, 90);

}

.page-container {
  background-color: white;
  max-width: 800px;
  margin: 2rem auto;
  border: solid 1px white;
  border-radius: 50px 50px 50px 0;
}

.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0 0;
}

h1 {
  text-align: center;
  font-family: trade-gothic-next, sans-serif;
  font-weight: 500;
  padding: 0 5%;
  color: #484848;
  font-size: 1.5rem;
}

form {
  display: grid;
  justify-content: center;
  font-family: trade-gothic-next, sans-serif;
  padding: 0 5%;
}

label {
  margin-bottom: 1rem;
}

input,
select {
  min-width: 100%;
}

.optional-fields-cs input {
  min-width: 1.5rem;
}

#btn-message {
  color: grey;
  text-align: center;
  font-style: italic;
  font-family: trade-gothic-next, sans-serif;
  min-height: 1.5rem;
}

.flex {
  display: flex;
  justify-content: space-evenly;
}

button {
  margin-top: 1rem;
  border-radius: 4px;
  border: 3px solid;
  font-family: var(--main-font);
  font-weight: 700;
  line-height: 1em;
  min-width: 9rem;
  padding: 0.5rem 1rem 0.6rem;
  text-align: center;
  cursor: pointer;
}

.btn {
  color: white;
  background-color: #00245A;
  border-color: #00245A;
}

.btn-reset {
  color: white;
  background-color: #767676;
  border-color: #767676;
}

.btn:hover {
  background-color: #00183D;
  border-color: #00183D;
}

.btn-reset:hover {
  background-color: #484848;
  border-color: #484848;
}

.divider {
  overflow: hidden;
  border-top: solid 0.5px grey;
  margin: 0 10%;
}

#signature {
  margin: 2rem 10% 4rem;
}
</style>