export const FETCH_ALL_RECIPIENTS = "@recipients_FETCH_ALL_RECIPIENTS"
export const FETCH_ALL_RECIPIENTS_SUCCESS = "@recipients_FETCH_ALL_RECIPIENTS_SUCCESS"
export const FETCH_ALL_RECIPIENTS_FAIL = "@recipients_FETCH_ALL_RECIPIENTS_FAIL"


export const fetchAllRecipients = () => ({
    type: FETCH_ALL_RECIPIENTS,

})

export const fetchAllRecipientsSuccess = recipients => ({
    type: FETCH_ALL_RECIPIENTS_SUCCESS,
    payload: {
        recipients
    }
})

export const fetchAllRecipientsFail = () => ({
    type: FETCH_ALL_RECIPIENTS_FAIL,
  
})
