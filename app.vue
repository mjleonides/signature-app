<template>
  <h1>
    K2United Branded Email Signature Generator
  </h1>
  <form>

    <label for="brand-selector">Brand:
      <select id="brand-selector" required v-model="brand">
        <option disabled>--Select Brand--</option>
        <option>K2United</option>
        <option>K2Share</option>
        <option>CareerSafe</option>
      </select></label>
    <label for="name">Full Name:
      <input id="name" type="text" v-model="name" required></label>
    <label for="position">Position/Seat Title:
      <input id="email" type="text" v-model="position" required></label>
    <label for="certifications">Certifications: (Comma seperated list)
      <input id="certifications" type="text" v-model="certs"></label>
    <label for="office-phone">Office Phone:
      <input id="office-phone" type="phone" v-model="officePhone" required></label>
    <label for="mobile-phone">Mobile Phone:
      <input id="mobile-phone" type="phone" v-model="mobilePhone"></label>
    <div class="flex"> <button>
        Reset
      </button>
      <button @click="buttonPress" type="button">
        Copy to Clipboard
      </button>
    </div>

  </form>

  <div class="divider"></div>

  <div id="table" v-if="brand === 'K2United'">
    <br>
    <table cellspacing="0" cellpadding="0" border="0"
      style="border-collapse: separate;table-layout: fixed;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;max-width:100%;"
      emb-background-style width="100%">
      <tbody>
        <tr>
          <td
            style="color:#00245A;font-size:15px;mso-line-height-rule:exactly;line-height:1.2em;padding-bottom:1px;font-family:'Trade Gothic Next', Arial, Helvetica, sans-serif;">
            <p style="margin:0px;"><span style="font-weight:bold;color:#00245A;font-size:15px;">{{ name }}
                <br>
                {{ certs }}</span></p>
          </td>
        </tr>
        <tr>
          <td
            style="color:#545454;font-size:15px;mso-line-height-rule:exactly;line-height:1.2em;padding-bottom:10px;font-family:'Trade Gothic Next', Arial, Helvetica, sans-serif;">
            <p style="margin:0px;"><span style="color:#545454;font-size:15px;"><em>{{ position }}</em></span></p>
          </td>
        </tr>

        <tr>
          <td
            style="color:#545454;font-size:12px;mso-line-height-rule:exactly;line-height:1.2em;padding-bottom:5px;font-family:'Trade Gothic Next', Arial, Helvetica, sans-serif;">
            <p style="margin:0px;"><span style="font-weight:bold;letter-spacing:1px;"><a href="https://k2united.com/"
                  style="color:#00245A;text-decoration:none;text-transform:uppercase;"
                  target="_blank">k2united.com</a></span> <span style="color:#D3D3D3;">|</span> A
              K2United Brand</p>
          </td>
        </tr>

        <tr>
          <td
            style="color:#545454;font-size:12px;mso-line-height-rule:exactly;line-height:1.2em;border-top:solid 1px #D3D3D3;padding-top:5px;font-family:'Trade Gothic Next', Arial, Helvetica, sans-serif;">
            <p style="margin:0px;"><span v-if="mobilePhone" style="color:#545454;"><span
                  style="font-weight:bold;color:#545454;">Mobile: <a href="tel:(999) 999-9999"
                    style="font-weight:normal;color:#545454;text-decoration:none;" target="_blank">{{
                      mobilePhone
                    }}</a></span> <span style="color:#D3D3D3;">|</span> </span><span style="color:#545454;"><span
                  style="font-weight:bold;color:#545454;">Office: </span> <a href="tel:(999) 999-9999"
                  style="color:#545454;text-decoration:none;" target="_blank">{{ officePhone }}</a> <span
                  style="color:#D3D3D3;">|</span> </span><span style="color:#545454;"><span
                  style="font-weight:bold;color:#545454;">Fax: </span> <a href="tel:(999) 999-9999"
                  style="color:#545454;text-decoration:none;" target="_blank">(999)
                  999-9999</a></span></p>
          </td>
        </tr>
        <tr>
          <td
            style="color:#545454;font-size:12px;mso-line-height-rule:exactly;line-height:1.2em;font-family:'Trade Gothic Next', Arial, Helvetica, sans-serif;">
            <p style="margin:0px;">1005 University Drive East, College Station, TX 77840</p>
          </td>
        </tr>


        <tr>
          <td
            style="color:#00245A;font-size:12px;height:45px;padding-top:5px;padding-bottom:5px;;font-family:'Trade Gothic Next', Arial, Helvetica, sans-serif;">
            <p style="margin:0px;"><a href="https://k2united.com/" style="border:0px;display:block;height:45px;"
                target="_blank">
                <img src="https://k2united.com/images/logo-k2united-email.png" width="192" height="45"
                  style="display:block;border:0px;" border="0" nosend="1" alt="K2United" /></a></p>
          </td>
        </tr>

        <tr>
          <td
            style="color:#545454;font-size:12px;mso-line-height-rule:exactly;line-height:1.2em;padding-top:5px;border-top:solid 1px #D3D3D3;font-family:'Lato', Arial, Helvetica, sans-serif;">
            <p style="margin:0px;"><span style="color:#545454;">Certified Great Place to Work <span
                  style="color:#D3D3D3;">|</span> Certified SBA HUBZone <span style="color:#D3D3D3;">|</span> Certified
                Veteran-Owned Small Business (VOSB)</span>
            </p>
          </td>
        </tr>
        <tr>
          <td
            style="color:#545454;font-size:12px;height:21px;padding-top:5px;font-family:Arial, Helvetica, sans-serif;">
            <p style="margin:0px;"><a href="" target="_blank"
                style="display:inline-block;padding-right:9px;vertical-align:middle;"><img
                  src="https://k2united.com/images/social-facebook.png" width="21" height="21"
                  style="border:0px;display:inline-block;" border="0" nosend="1" alt="Facebook" /></a>&nbsp;<a href=""
                target="_blank" style="display:inline-block;padding-right:9px;vertical-align:middle;"><img
                  src="https://k2united.com/images/social-linkedin.png" width="21" height="21"
                  style="border:0px;display:inline-block;" border="0" nosend="1" alt="LinkedIn" /></a>&nbsp;<a href=""
                target="_blank" style="display:inline-block;padding-right:9px;vertical-align:middle;"><img
                  src="https://k2united.com/images/social-instagram.png" width="21" height="21"
                  style="border:0px;display:inline-block;" border="0" nosend="1" alt="Instagram" /></a>&nbsp;<a href=""
                target="_blank" style="display:inline-block;padding-right:9px;vertical-align:middle;"><img
                  src="https://k2united.com/images/social-twitter.png" width="21" height="21"
                  style="border:0px;display:inline-block;" border="0" nosend="1" alt="Twitter" /></a>&nbsp;</p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div id="table" v-if="brand === 'K2Share'">
    <br>
    <table cellspacing="0" cellpadding="0" border="0"
      style="border-collapse: separate;table-layout: fixed;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;max-width:100%;"
      emb-background-style width="100%">
      <tbody>
        <tr>
          <td
            style="color:#00245A;font-size:15px;mso-line-height-rule:exactly;line-height:1.2em;padding-bottom:1px;font-family:'Trade Gothic Next', Arial, Helvetica, sans-serif;">
            <p style="margin:0px;"><span style="font-weight:bold;color:#00245A;font-size:15px;">{{ name }}
                <br>
                {{ certs }}</span></p>
          </td>
        </tr>
        <tr>
          <td
            style="color:#545454;font-size:15px;mso-line-height-rule:exactly;line-height:1.2em;padding-bottom:10px;font-family:'Trade Gothic Next', Arial, Helvetica, sans-serif;">
            <p style="margin:0px;"><span style="color:#545454;font-size:15px;"><em>{{ position }}</em></span></p>
          </td>
        </tr>

        <tr>
          <td
            style="color:#545454;font-size:12px;mso-line-height-rule:exactly;line-height:1.2em;padding-bottom:5px;font-family:'Trade Gothic Next', Arial, Helvetica, sans-serif;">
            <p style="margin:0px;"><span style="font-weight:bold;letter-spacing:1px;"><a href="https://k2united.com/"
                  style="color:#00245A;text-decoration:none;text-transform:uppercase;"
                  target="_blank">k2united.com</a></span> <span style="color:#D3D3D3;">|</span> A
              K2United Brand</p>
          </td>
        </tr>

        <tr>
          <td
            style="color:#545454;font-size:12px;mso-line-height-rule:exactly;line-height:1.2em;border-top:solid 1px #D3D3D3;padding-top:5px;font-family:'Trade Gothic Next', Arial, Helvetica, sans-serif;">
            <p style="margin:0px;"><span v-if="mobilePhone" style="color:#545454;"><span
                  style="font-weight:bold;color:#545454;">Mobile: <a href="tel:(999) 999-9999"
                    style="font-weight:normal;color:#545454;text-decoration:none;" target="_blank">{{
                      mobilePhone
                    }}</a></span> <span style="color:#D3D3D3;">|</span> </span><span style="color:#545454;"><span
                  style="font-weight:bold;color:#545454;">Office: </span> <a href="tel:(999) 999-9999"
                  style="color:#545454;text-decoration:none;" target="_blank">{{ officePhone }}</a> <span
                  style="color:#D3D3D3;">|</span> </span><span style="color:#545454;"><span
                  style="font-weight:bold;color:#545454;">Fax: </span> <a href="tel:(999) 999-9999"
                  style="color:#545454;text-decoration:none;" target="_blank">(999)
                  999-9999</a></span></p>
          </td>
        </tr>
        <tr>
          <td
            style="color:#545454;font-size:12px;mso-line-height-rule:exactly;line-height:1.2em;font-family:'Trade Gothic Next', Arial, Helvetica, sans-serif;">
            <p style="margin:0px;">1005 University Drive East, College Station, TX 77840</p>
          </td>
        </tr>


        <tr>
          <td
            style="color:#00245A;font-size:12px;height:45px;padding-top:5px;padding-bottom:5px;;font-family:'Trade Gothic Next', Arial, Helvetica, sans-serif;">
            <p style="margin:0px;"><a href="https://k2united.com/" style="border:0px;display:block;height:45px;"
                target="_blank">
                <img src="https://www.k2share.com/content/graphics/logos/K2SHARE-Logo-HORIZONTAL-W-250w.png" width="192"
                  height="45" style="display:block;border:0px;" border="0" nosend="1" alt="K2United" /></a></p>
          </td>
        </tr>

        <tr>
          <td
            style="color:#545454;font-size:12px;mso-line-height-rule:exactly;line-height:1.2em;padding-top:5px;border-top:solid 1px #D3D3D3;font-family:'Lato', Arial, Helvetica, sans-serif;">
            <p style="margin:0px;"><span style="color:#545454;">Certified Great Place to Work <span
                  style="color:#D3D3D3;">|</span> Certified SBA HUBZone <span style="color:#D3D3D3;">|</span> Certified
                Veteran-Owned Small Business (VOSB)</span>
            </p>
          </td>
        </tr>
        <tr>
          <td
            style="color:#545454;font-size:12px;height:21px;padding-top:5px;font-family:Arial, Helvetica, sans-serif;">
            <p style="margin:0px;"><a href="" target="_blank"
                style="display:inline-block;padding-right:9px;vertical-align:middle;"><img
                  src="https://k2united.com/images/social-facebook.png" width="21" height="21"
                  style="border:0px;display:inline-block;" border="0" nosend="1" alt="Facebook" /></a>&nbsp;<a href=""
                target="_blank" style="display:inline-block;padding-right:9px;vertical-align:middle;"><img
                  src="https://k2united.com/images/social-linkedin.png" width="21" height="21"
                  style="border:0px;display:inline-block;" border="0" nosend="1" alt="LinkedIn" /></a>&nbsp;<a href=""
                target="_blank" style="display:inline-block;padding-right:9px;vertical-align:middle;"><img
                  src="https://k2united.com/images/social-instagram.png" width="21" height="21"
                  style="border:0px;display:inline-block;" border="0" nosend="1" alt="Instagram" /></a>&nbsp;<a href=""
                target="_blank" style="display:inline-block;padding-right:9px;vertical-align:middle;"><img
                  src="https://k2united.com/images/social-twitter.png" width="21" height="21"
                  style="border:0px;display:inline-block;" border="0" nosend="1" alt="Twitter" /></a>&nbsp;</p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div id="table" v-if="brand === 'CareerSafe'">
    <br>
    <table cellspacing="0" cellpadding="0" border="0"
      style="border-collapse: separate;table-layout: fixed;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;max-width:100%;"
      emb-background-style width="100%">
      <tbody>
        <tr>
          <td
            style="color:#00245A;font-size:15px;mso-line-height-rule:exactly;line-height:1.2em;padding-bottom:1px;font-family:'Trade Gothic Next', Arial, Helvetica, sans-serif;">
            <p style="margin:0px;"><span style="font-weight:bold;color:#00245A;font-size:15px;">{{ name }}
                <br>
                {{ certs }}</span></p>
          </td>
        </tr>
        <tr>
          <td
            style="color:#545454;font-size:15px;mso-line-height-rule:exactly;line-height:1.2em;padding-bottom:10px;font-family:'Trade Gothic Next', Arial, Helvetica, sans-serif;">
            <p style="margin:0px;"><span style="color:#545454;font-size:15px;"><em>{{ position }}</em></span></p>
          </td>
        </tr>

        <tr>
          <td
            style="color:#545454;font-size:12px;mso-line-height-rule:exactly;line-height:1.2em;padding-bottom:5px;font-family:'Trade Gothic Next', Arial, Helvetica, sans-serif;">
            <p style="margin:0px;"><span style="font-weight:bold;letter-spacing:1px;"><a href="https://k2united.com/"
                  style="color:#00245A;text-decoration:none;text-transform:uppercase;"
                  target="_blank">k2united.com</a></span> <span style="color:#D3D3D3;">|</span> A
              K2United Brand</p>
          </td>
        </tr>

        <tr>
          <td
            style="color:#545454;font-size:12px;mso-line-height-rule:exactly;line-height:1.2em;border-top:solid 1px #D3D3D3;padding-top:5px;font-family:'Trade Gothic Next', Arial, Helvetica, sans-serif;">
            <p style="margin:0px;"><span v-if="mobilePhone" style="color:#545454;"><span
                  style="font-weight:bold;color:#545454;">Mobile: <a href="tel:(999) 999-9999"
                    style="font-weight:normal;color:#545454;text-decoration:none;" target="_blank">{{
                      mobilePhone
                    }}</a></span> <span style="color:#D3D3D3;">|</span> </span><span style="color:#545454;"><span
                  style="font-weight:bold;color:#545454;">Office: </span> <a href="tel:(999) 999-9999"
                  style="color:#545454;text-decoration:none;" target="_blank">{{ officePhone }}</a> <span
                  style="color:#D3D3D3;">|</span> </span><span style="color:#545454;"><span
                  style="font-weight:bold;color:#545454;">Fax: </span> <a href="tel:(999) 999-9999"
                  style="color:#545454;text-decoration:none;" target="_blank">(999)
                  999-9999</a></span></p>
          </td>
        </tr>
        <tr>
          <td
            style="color:#545454;font-size:12px;mso-line-height-rule:exactly;line-height:1.2em;font-family:'Trade Gothic Next', Arial, Helvetica, sans-serif;">
            <p style="margin:0px;">1005 University Drive East, College Station, TX 77840</p>
          </td>
        </tr>


        <tr>
          <td
            style="color:#00245A;font-size:12px;height:45px;padding-top:5px;padding-bottom:5px;;font-family:'Trade Gothic Next', Arial, Helvetica, sans-serif;">
            <p style="margin:0px;"><a href="https://k2united.com/" style="border:0px;display:block;height:45px;"
                target="_blank">
                <img src="https://www.careersafeonline.com/images/careersafe-logo-2022-green-white-white-large.png"
                  width="192" height="45" style="display:block;border:0px;" border="0" nosend="1" alt="K2United" /></a>
            </p>
          </td>
        </tr>

        <tr>
          <td
            style="color:#545454;font-size:12px;mso-line-height-rule:exactly;line-height:1.2em;padding-top:5px;border-top:solid 1px #D3D3D3;font-family:'Lato', Arial, Helvetica, sans-serif;">
            <p style="margin:0px;"><span style="color:#545454;">Certified Great Place to Work <span
                  style="color:#D3D3D3;">|</span> Certified SBA HUBZone <span style="color:#D3D3D3;">|</span> Certified
                Veteran-Owned Small Business (VOSB)</span>
            </p>
          </td>
        </tr>
        <tr>
          <td
            style="color:#545454;font-size:12px;height:21px;padding-top:5px;font-family:Arial, Helvetica, sans-serif;">
            <p style="margin:0px;"><a href="" target="_blank"
                style="display:inline-block;padding-right:9px;vertical-align:middle;"><img
                  src="https://k2united.com/images/social-facebook.png" width="21" height="21"
                  style="border:0px;display:inline-block;" border="0" nosend="1" alt="Facebook" /></a>&nbsp;<a href=""
                target="_blank" style="display:inline-block;padding-right:9px;vertical-align:middle;"><img
                  src="https://k2united.com/images/social-linkedin.png" width="21" height="21"
                  style="border:0px;display:inline-block;" border="0" nosend="1" alt="LinkedIn" /></a>&nbsp;<a href=""
                target="_blank" style="display:inline-block;padding-right:9px;vertical-align:middle;"><img
                  src="https://k2united.com/images/social-instagram.png" width="21" height="21"
                  style="border:0px;display:inline-block;" border="0" nosend="1" alt="Instagram" /></a>&nbsp;<a href=""
                target="_blank" style="display:inline-block;padding-right:9px;vertical-align:middle;"><img
                  src="https://k2united.com/images/social-twitter.png" width="21" height="21"
                  style="border:0px;display:inline-block;" border="0" nosend="1" alt="Twitter" /></a>&nbsp;</p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      brand: "",
      name: "FirstName Lastname",
      position: "Position/Seat Title",
      certs: "CERT1, CERT2, CERT3, CERT4, CERT5", //optional
      officePhone: "(999) 999-9999",
      mobilePhone: "(999) 999-9999" //optional
    }
  },
  methods: {
    buttonPress() {
      const table = document.querySelector("#table");
      //document.getSelection().selectAllChildren(table); //if using execCommand
      //document.execCommand("copy"); //execCommand is deprecated, ff users must manually enable ClipboardItem tho

      //Modern Clipboard API method
      const selection = [new ClipboardItem({
        "text/html": new Blob([table.innerHTML], {
          type: "text/html",
        })
      })];

      navigator.clipboard.write(selection).then(() => {
        console.log('Content copied to clipboard');
      }, () => {
        console.error('Failed to copy');
      });
    }

  }
}
</script>

<style>
h1 {
  text-align: center;
}

form {
  display: grid;
  min-width: 70vw;
  justify-content: center;
}

label {
  margin-bottom: 1rem;
}

input,
select {
  min-width: 100%;
}

.flex {
  display: flex;
  justify-content: center;
}

button {
  margin: 1rem;
}

.divider {
  overflow: hidden;
  border: solid 1px black;
}

#table {
  margin: 1rem 15vw;
}
</style>