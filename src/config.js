export default {
    STRIPE_KEY: "pk_test_G7VlkUO3XswetM0JY2sRgAB1000PRLMe2e",
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "ap-southeast-1",
      BUCKET: "hdpz-notes-upload"
    },
    apiGateway: {
      REGION: "ap-southeast-1",
      URL: "https://cfv1kv5lh3.execute-api.ap-southeast-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "ap-southeast-1",
      USER_POOL_ID: "ap-southeast-1_QPIQh5bVv",
      APP_CLIENT_ID: "5lbtihb25p925kmdh6i26imqli",
      IDENTITY_POOL_ID: "ap-southeast-1:59e91cd3-c0ac-4af8-9312-3b166c43a679"
    }
};