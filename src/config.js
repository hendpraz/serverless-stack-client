const dev = {
  STRIPE_KEY: "pk_test_G7VlkUO3XswetM0JY2sRgAB1000PRLMe2e",
  s3: {
    REGION: "ap-southeast-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-dl4740ilm5ck"
  },
  apiGateway: {
    REGION: "ap-southeast-1",
    URL: "https://3lgzhx3n3g.execute-api.ap-southeast-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "ap-southeast-1",
    USER_POOL_ID: "ap-southeast-1_TBrDgcAyq",
    APP_CLIENT_ID: "ak3vnu7jhi61b70bnruphtqep",
    IDENTITY_POOL_ID: "ap-southeast-1:b85a2f47-bed3-43a8-b143-402db942bb80"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_G7VlkUO3XswetM0JY2sRgAB1000PRLMe2e",
  s3: {
    REGION: "ap-southeast-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1rg5v4sta3xqv"
  },
  apiGateway: {
    REGION: "ap-southeast-1",
    URL: "https://lfxwd6ttga.execute-api.ap-southeast-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "ap-southeast-1",
    USER_POOL_ID: "ap-southeast-1_BfVRqHf4E",
    APP_CLIENT_ID: "l4k4h36nqp61og1a7vbbpik5c",
    IDENTITY_POOL_ID: "ap-southeast-1:3e15982e-42a4-4fad-bb59-706649806d70"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};