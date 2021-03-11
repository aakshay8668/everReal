context('API test case', () => {
    beforeEach(() => {
      cy.visit('https://acme-qa.everreal.co/app/public/apply/89577a55-6211-4ebb-85ad-dbbb69c59d8e/applications/step2')
    })
  
    it('Fetch property list', () => {
      cy
        .request({
          url: 'https://acme-qa.everreal.co/api/prism/public/expose?take=9&t=1615400406460',
          headers: {
            "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3NjVjZWEzNy0wOGMwLTQ1NjQtOGNiZS05YjllOGNjNjY1NjYiLCJzdWIiOiI1YTY4ZTE5ZC0wN2U3LTQxZGQtOTkxNi00OTM1YTdlNGU3ZGIiLCJleHAiOjE2MTU0MDM0MTMsImlhdCI6MTYxNTM5OTgxM30.UXCdWwtTAsp03AhQNBLma0V6-3gPCGbYO8roaeoBp9Onx56nacQKwzsUJy_Dx1Qx-eB-DmDHO7Esfbi1tQHht3qP-g8n2ULEHCWWteibVZ4jiKlOb9M9fyN1zX3q3eSlc9-Qrph82HXw8-f6DvBT9uWMt7hI_ui9aB9sUEUpPnn1F3slRnmCJQgLGSPL1xqpMGsipETcioNtFB5cXW_zNAoxUBsIJRcMhF6ynJQon4aIlny9iQdhu7Y3hNwImvgfAGQwk7WH_Q86eLB3Txdf0lPieC4snXhVPc3Lqw9iMS5uV8p9MgrUcPvbFfum0de5_F6PhDo633i3Te7L2gHJyQ",
            "Content-type": "application/json"
          }
        }).then((response) => {
          
          cy.log(JSON.stringify(response));
          
          expect(response.status).to.eq(200)
         
          expect(response.body).to.not.be.null;
          expect(response.body).to.have.length.of.at.least(length);
          expect(response.body[0]).property('id').to.be.a('string')
          expect(response.body[0].amenities.parking).property('quantity').to.be.a('number')
          })
     
  
    })
  })