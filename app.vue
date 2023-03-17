<template>
  <div class="page-container">
    <div class="logo-container"><img class="logo" src="https://www.k2united.com/images/k2unitedlogo.png"></div>

    <h1>
      Email Signature Generator
    </h1>
    <form>
      <div id="error-container" v-if="hasErrors">
        <i class="fa-solid fa-square-exclamation"></i>
        <div class="errors">
          <p class="error" v-if="errorBrand"><strong>Whoops! </strong>Brand is required.</p>
          <p class="error" v-if="errorName"><strong>Whoops! </strong>Name is required.</p>
          <p class="error" v-if="errorPosition"><strong>Whoops! </strong>Position is required.</p>
          <p class="error" v-if="errorMobile"><strong>Whoops! </strong>Mobile Phone should be a valid 10-digit phone
            number.</p>
          <p class="error" v-if="errorOffice"><strong>Whoops! </strong>Office Phone should be a valid 10-digit phone
            number.</p>
          <p class="error" v-if="errorFax"><strong>Whoops! </strong>Fax should be a valid 10-digit fax number.</p>
        </div>
      </div>

      <label for="brand-selector">
        <p>Brand * <span class="error" v-if="errorBrand">Please select brand.</span></p>
        <select id="brand-selector" v-model="brand" :data-error="errorBrand">
          <option disabled>-- Select Brand --</option>
          <option>K2United</option>
          <option>K2Share</option>
          <option>CareerSafe</option>
        </select>
      </label>
      <label for="name">
        <p>Full Name * <span class="error" v-if="errorName">Required Field.</span></p>
        <input id="name" type="text" v-model="name" placeholder="Firstname Lastname" :data-error="errorName">
      </label>
      <label for="position">
        <p>Position/Professional Title * <span class="error" v-if="errorPosition">Required Field.</span></p>
        <input id="position" type="text" v-model="position" placeholder="Director of Good Times"
          :data-error="errorPosition">
      </label>
      <label for="certifications" class="half-width-left">
        <p>Certifications</p>
        <input id="certifications" type="text" v-model="certs" placeholder="CERT, CERT, CERT">
      </label>
      <label for="pronouns" class="half-width-right">
        <p>Pronouns</p>
        <input id="pronouns" type="text" v-model="pronouns" placeholder="They/Them">
      </label>
      <label for="mobile-phone">
        <p>Mobile Phone <span class="error" v-if="errorMobile">Must have 10
            digits.</span></p>
        <input id="mobile-phone" type="text" v-model="mobilePhone" placeholder="(999) 999-9999" :data-error="errorMobile">
      </label>
      <label for="office-phone" class="half-width-left">
        <p>Office Phone <span class="error" v-if="errorOffice">Must have 10
            digits.</span></p>
        <input id="office-phone" type="text" v-model="officePhone" placeholder="(999) 999-9999" :data-error="errorOffice">
      </label>
      <label for="fax" class="half-width-right">
        <p>Fax Number <span class="error" v-if="errorFax">Must have 10 digits.</span></p>
        <input id="fax" type="text" v-model="fax" placeholder="(999) 999-9999" :data-error="errorFax">
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
              style="color:#00245A;font-size:10pt;mso-line-height-rule:exactly;line-height:1.2em;padding-bottom:1px;font-family:'Trade Gothic Next', Arial, Helvetica, sans-serif;">
              <p style="margin:0px;"><span style="font-weight:bold;color:#00245A;font-size:10pt;">{{ name }}<br
                    v-if="validateCerts(certs)">{{ formatCerts(certs) }}</span></p>
            </td>
          </tr>
          <tr>
            <td
              style="color:#545454;font-size:10pt;mso-line-height-rule:exactly;line-height:1.2em;padding-bottom:10px;font-family:'Trade Gothic Next', Arial, Helvetica, sans-serif;">
              <p style="margin:0px;"><span style="color:#545454;font-size:10pt;"><em>{{ position }}</em></span><span
                  v-if="pronouns" style="color:#D3D3D3;"><span v-if="pronouns && position"> | </span><span
                    style="color:#545454;font-size:8pt;"><em>({{
                      pronouns
                    }})</em></span></span></p>
            </td>
          </tr>

          <tr>
            <td
              style="color:#545454;font-size:8pt;mso-line-height-rule:exactly;line-height:1.2em;padding-bottom:5px;font-family:'Trade Gothic Next', Arial, Helvetica, sans-serif;">
              <p style="margin:0px;"><span style="font-weight:bold;letter-spacing:1px;"><a href="https://k2united.com/"
                    style="color:#00245A;text-decoration:none;text-transform:uppercase;"
                    target="_blank">k2united.com</a></span></p>
            </td>
          </tr>

          <tr>
            <td
              style="color:#545454;font-size:8pt;mso-line-height-rule:exactly;line-height:1.2em;border-top:solid 1px #D3D3D3;padding-top:5px;font-family:'Trade Gothic Next', Arial, Helvetica, sans-serif;">
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
              style="color:#00245A;font-size:8pt;height:45px;padding-top:5px;padding-bottom:5px;font-family:'Trade Gothic Next', Arial, Helvetica, sans-serif;">
              <p style="margin:0px;"><a href="https://k2united.com/" style="border:0px;display:block;height:45px;"
                  target="_blank">
                  <img src="https://k2united.com/images/logo-k2united-email.png" width="195" height="45"
                    style="display:block;border:0px;" border="0" nosend="1" alt="K2United" /></a></p>
            </td>
          </tr>

          <tr>
            <td
              style="color:#545454;font-size:8pt;mso-line-height-rule:exactly;line-height:1.2em;padding-top:2px;border-top:solid 1px #D3D3D3;font-family:'Trade Gothic Next', Arial, Helvetica, sans-serif;">
              <p style="margin:0px;"><span style="color:#545454;">Certified Great Place to Work<sup>&reg;</sup> <span
                    style="color:#D3D3D3;">|</span> Certified Veteran-Owned Small Business (VOSB)</span></p>
            </td>
          </tr>
          <tr>
            <td style="color:#545454;font-size:8pt;height:21px;padding-top:5px;font-family:Arial, Helvetica, sans-serif;">
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
              style="color:#231F20;font-size:10pt;mso-line-height-rule:exactly;line-height:1.2em;padding-bottom:1px;font-family:'Lato', Arial, Helvetica, sans-serif;">
              <p style="margin:0px;"><span style="font-weight:bold;color:#231F20;font-size:10pt;">{{ name }}<br
                    v-if="validateCerts(certs)">{{ formatCerts(certs) }}</span></p>
            </td>
          </tr>
          <tr>
            <td
              style="color:#545454;font-size:10pt;mso-line-height-rule:exactly;line-height:1.2em;padding-bottom:10px;font-family:'Lato', Arial, Helvetica, sans-serif;">
              <p style="margin:0px;"><span style="color:#545454;font-size:10pt;"><em>{{ position }}</em></span><span
                  v-if="pronouns" style="color:#D3D3D3;"><span v-if="pronouns && position"> | </span><span
                    style="color:#545454;font-size:8pt;"><em>({{
                      pronouns
                    }})</em></span></span></p>
            </td>
          </tr>
          <tr>
            <td
              style="color:#545454;font-size:8pt;mso-line-height-rule:exactly;line-height:1.2em;padding-bottom:5px;font-family:'Lato', Arial, Helvetica, sans-serif;">
              <p style="margin:0px;"><span style="font-weight:bold;letter-spacing:1px;text-transform:uppercase;"><a
                    href="https://www.k2share.com/" style="color:#231F20;text-decoration:none;"
                    target="_blank">k2share.com</a></span><span style="color:#D3D3D3;"> | </span><span
                  style="color:#545454;">Security Beyond
                  Compliance<sup style="font-size:5pt;"> TM</sup></span> <span style="color:#D3D3D3;">|</span> A <a
                  href="https://www.k2united.com" style="color:#545454;text-decoration: none;">K2United</a> Brand</p>
            </td>
          </tr>
          <tr>
            <td
              style="color:#545454;font-size:8pt;mso-line-height-rule:exactly;line-height:1.2em;border-top:solid 1px #D3D3D3;padding-top:5px;font-family:'Lato', Arial, Helvetica, sans-serif;">
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
              style="color:#231F20;font-size:8pt;height:36px;padding-top:10px;padding-bottom:10px;font-family:'Lato', Arial, Helvetica, sans-serif;">
              <p style="margin:0px;"><a href="https://www.k2share.com/" style="border:0px;display:block;height:36px;"
                  target="_blank">
                  <img src="https://www.k2share.com/content/graphics/logos/logo-k2share-email.png" width="178" height="36"
                    style="display:block;border:0px;" border="0" nosend="1" alt="K2Share" /></a></p>
            </td>
          </tr>

          <tr>
            <td
              style="color:#545454;font-size:8pt;mso-line-height-rule:exactly;line-height:1.2em;padding-top:2px;border-top:solid 1px #D3D3D3;font-family:'Lato', Arial, Helvetica, sans-serif;">
              <p style="margin:0px;"><span style="color:#545454;">Certified SBA HUBZone <span
                    style="color:#D3D3D3;">|</span> Certified Great Place to Work<sup>&reg;</sup> <span
                    style="color:#D3D3D3;">|</span> Certified Veteran-Owned Small Business (VOSB)</span></p>
            </td>
          </tr>
          <tr>
            <td style="color:#545454;font-size:8pt;height:21px;padding-top:5px;font-family:Arial, Helvetica, sans-serif;">
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
              style="color:#044C7A;font-size:10pt;mso-line-height-rule:exactly;line-height:1.2em;padding-bottom:1px;font-family:'Open Sans', Arial, Helvetica, sans-serif;">
              <p style="margin:0px;"><span style="font-weight:bold;color:#044C7A;font-size:10pt;">{{ name }}<br
                    v-if="validateCerts(certs)">{{ formatCerts(certs) }}</span></p>
            </td>
          </tr>
          <tr>
            <td
              style="color:#545454;font-size:10pt;mso-line-height-rule:exactly;line-height:1.2em;padding-bottom:10px;font-family:'Open Sans', Arial, Helvetica, sans-serif;">
              <p style="margin:0px;"><span style="color:#545454;font-size:10pt;"><em>{{ position }}</em></span><span
                  v-if="pronouns" style="color:#D3D3D3;"><span v-if="pronouns && position"> | </span><span
                    style="color:#545454;font-size:8pt;"><em>({{
                      pronouns
                    }})</em></span></span></p>
            </td>
          </tr>
          <tr>
            <td
              style="color:#545454;font-size:8pt;mso-line-height-rule:exactly;line-height:1.2em;padding-bottom:5px;font-family:'Open Sans', Arial, Helvetica, sans-serif;">
              <p style="margin:0px;"><span style="font-weight:bold;"><a href="https://careersafeonline.com/"
                    style="color:#044C7A;text-decoration:none;text-transform:uppercase;"
                    target="_blank">careersafeonline.com</a></span> <span style="color:#D3D3D3;">|</span>A <a
                  href="https://www.k2united.com" style="color:#545454;text-decoration: none;">K2United</a> Brand</p>
            </td>
          </tr>
          <tr>
            <td
              style="color:#545454;font-size:8pt;mso-line-height-rule:exactly;line-height:1.2em;border-top:solid 1px #D3D3D3;padding-top:5px;font-family:'Open Sans', Arial, Helvetica, sans-serif;">
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
              style="color:#044C7A;font-size:8pt;height:36px;padding-top:10px;padding-bottom:10px;font-family:'Open Sans', Arial, Helvetica, sans-serif;">
              <p style="margin:0px;"><a href="https://careersafeonline.com/" style="border:0px;display:block;height:36px;"
                  target="_blank">
                  <img src="https://www.careersafeonline.com/images/logo-careersafe-email.png" width="200" height="36"
                    style="display:block;border:0px;" border="0" nosend="1" alt="CareerSafe" /></a></p>
            </td>
          </tr>

          <tr>
            <td
              style="color:#545454;font-size:8pt;mso-line-height-rule:exactly;line-height:1.2em;padding-top:2px;border-top:solid 1px #D3D3D3;font-family:'Open Sans', Arial, Helvetica, sans-serif;">
              <p style="margin:0px;"><span style="color:#545454;">Certified Great Place to Work<sup>&reg;</sup></span></p>
            </td>
          </tr>
          <tr>
            <td style="color:#545454;font-size:8pt;height:21px;padding-top:5px;font-family:Arial, Helvetica, sans-serif;">
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
      pronouns: "",
      certs: "", //optional
      mobilePhone: "", //optional :href="'tel:' + formatPhone(mobilePhone)"
      officePhone: "(979) 260-0030", //optional :href="'tel:' + formatPhone(officePhone)"
      fax: "", //optional
      //errors
      hasErrors: false,
      errorBrand: false,
      errorName: false,
      errorPosition: false,
      errorMobile: false,
      errorOffice: false,
      errorFax: false,
    }
  },
  methods: {
    buttonPress() {
      (this.validateReqs() === false) ? this.copySign() : console.log("Copy failed, fix required fields pretty please.");
    },
    copySign() {
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
        setTimeout(() => { document.querySelector("#btn-message").innerHTML = "" }, 2000)
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
      const certArray = input.match(/([a-z\d.])+/gi);
      return (certArray?.length > 2) ? certArray.join(", ") : (certArray) ? ", " + certArray.join(", ") : "";
    },
    validateCerts(input) {
      const certArray = input.match(/([a-z\d.])+/gi);
      return (certArray?.length > 2)
    },
    validateReqs() {
      this.hasErrors = false;

      if (this.brand !== "-- Select Brand --") { //checks brand selection
        this.errorBrand = false;
      } else {
        this.errorBrand = true;
        this.hasErrors = true;
      }

      //checks name
      if (this.name) {
        this.errorName = false;
      } else {
        this.errorName = true;
        this.hasErrors = true;
      }

      //checks position
      if (this.position) {
        this.errorPosition = false;
      } else {
        this.errorPosition = true;
        this.hasErrors = true;
      }

      //checks mobile
      if (!this.mobilePhone || this.validatePhone(this.mobilePhone)) {
        this.errorMobile = false;
      } else {
        this.errorMobile = true;
        this.hasErrors = true;
      }

      //checks office
      if (!this.officePhone || this.validatePhone(this.officePhone)) {
        this.errorOffice = false;
      } else {
        this.errorOffice = true;
        this.hasErrors = true;
      }

      //checks fax
      if (!this.fax || this.validatePhone(this.fax)) {
        this.errorFax = false;
      } else {
        this.errorFax = true;
        this.hasErrors = true;
      }

      return this.hasErrors
    }
  },
  mounted() {
    function definePlaceholderBehavior() {
      $("input, textarea").each(function () {
        $(this).focus(function () {
          let placeholder = $(this).attr("placeholder");
          if (typeof placeholder !== "undefined" && typeof placeholder !== false) {
            $(this).attr("placeholder", "");
            $(this).blur(function () {
              $(this).attr("placeholder", placeholder);
            });
          }
        });
      });
    }
    //definePlaceholderBehavior();
  }
}
</script>

<style lang="scss">
$text1-color-normal: #767676;
$text2-color-large: #939393;
$primary-color: #00245A;
$secondary-color: #D50032;
$accent1-color: #FFBC45;
$accent2-color: #66C2ED;
$neutral1-color: #F0F0F0;
$neutral2-color: #D3D3D3;
$placeholder-color: #DEDEDE;
$dark-text-color: #3e3e3e;
$white-color: #ffffff;
$black-color: #000000;
$dark-mode-background: #1C1C1C;
$dark-mode-bg-alt: #343434;

$danger-color: #C50000;

$form-background-color: $white-color;
$input-text-color: $dark-text-color;

@media (prefers-color-scheme: light) {}


* {
  box-sizing: border-box;
}

body {
  background-color: $primary-color;

}

.page-container {
  background-color: $form-background-color;
  max-width: 800px;
  margin: 0 auto;
  border: solid $primary-color;
  border-radius: 50px 50px 50px 0;
}


.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0 0;

  img {
    max-width: max(180px, 32.5%);
  }
}

h1 {
  text-align: center;
  font-family: trade-gothic-next, sans-serif;
  font-weight: 500;
  padding: 0 5%;
  color: $text1-color-normal;
  font-size: 1.5rem;
}

form {
  display: grid;
  justify-content: center;
  font-family: trade-gothic-next, sans-serif;
  gap: 0 1rem;
  grid-template-columns: repeat(2, min(200px, 45%));

  label {
    margin-bottom: 1rem;
    font-weight: 600;
    line-height: 1.25rem;
    grid-column: 1/3;

    p {
      margin: 0 0 0.25rem;
      display: flex;
      flex-direction: column;
      color: $input-text-color;
    }
  }

  input,
  select {
    min-width: 100%;
    background: $form-background-color;
    border: 1px solid $dark-text-color;
    border-radius: 5px;
    padding: 0.375rem 0.75rem;
    color: $input-text-color;
    height: 1.95rem;


    &[data-error=true] {
      border: solid 1px $danger-color;
    }

    &:focus-visible {
      outline: solid 2px $accent2-color;
    }
  }

  ::placeholder {
    color: $placeholder-color;
  }

  .optional-fields-cs input {
    min-width: 1.5rem;
  }
}

.half-width {
  max-width: 50%;

  &-left {
    grid-column: 1/2;

    &>input {
      max-width: 50%;
    }
  }

  &-right {
    grid-column: 2/3;

    &>input {
      max-width: 50%;
    }
  }
}

#btn-message {
  color: $text1-color-normal;
  text-align: center;
  font-style: italic;
  font-family: trade-gothic-next, sans-serif;
  min-height: 1.5rem;
  grid-column: 1/3;
}

.flex {
  display: flex;
  justify-content: space-between;
  grid-column: 1/3;
  ;
}

button {
  margin-top: 1rem;
  border-radius: 5px;
  border: 3px solid;
  font-family: trade-gothic-next, sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  line-height: 1.125rem;
  min-width: 9rem;
  padding: 0.5rem 1rem 0.6rem;
  text-align: center;
  cursor: pointer;

  &.btn {
    color: $white-color;
    background-color: $primary-color;
    border-color: $primary-color;

    &-reset {
      color: $white-color;
      background-color: $text1-color-normal;
      border-color: $text1-color-normal;
    }
  }
}


.divider {
  overflow: hidden;
  border-top: solid 0.5px $text1-color-normal;
  margin: 0 10%;
}



#error-container {
  display: flex;
  flex-direction: row;
  margin-bottom: 1.4rem;
  grid-column: 1/3;

  i {
    font-size: 2rem;
    color: $danger-color;
    line-height: 2rem;
    margin-right: 0.75rem;
  }

  .errors {
    border: solid 1px $danger-color;
    border-radius: 5px;
    width: 100%;
    padding: 0.25rem 0.75rem 0.25rem;
    color: $input-text-color;
  }
}

span.error {
  color: $dark-text-color;
  position: absolute;
  align-self: flex-end;
  display: none;
}

p.error {
  font-size: 12px;
  line-height: 18px;
  margin: 0 0 0.25rem;
}

/* @media (prefers-color-scheme: dark) {
  .page-container {
    background-color: $dark-mode-background;
  }

  h1 {
    color: $white-color;
  }

  form {
    label p {
      color: $white-color;
    }

    select,
    input {
      color: $white-color;
      background: $dark-mode-background;
    }
  }

  .errors p {
    color: $white-color;
  }

  #signature {
    //background-color: $dark-mode-bg-alt;
    border-radius: 50px;
  }

} */

input:focus::placeholder {
  color: transparent;
}


#signature {
  margin: 2rem 10% 4rem;
  padding: 0.5rem 1.5rem 1.5rem;
}
</style>