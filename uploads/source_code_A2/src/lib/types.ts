// Email configuration types
export interface EmailAuth {
  user: string;
  pass: string;
}

export interface EmailConfig {
  fromEmail: string;
  host: string;
  port: number;
  secure: boolean;
  auth: EmailAuth;
}

// User types
export interface UserResponse {
  id: string;
  name: string | null;
  email: string;
  role: string;
  emailVerified: Date | null;
  image: string | null;
  phone: string | null;
  address: string | null;
  createdAt: Date;
  updatedAt: Date;
}

// Auth types
export interface AuthResponse {
  success: boolean;
  message: string;
  user?: UserResponse;
}

// Booking types
export interface BookingDetails {
  id: string;
  tourName: string;
  departureDate: Date;
  participants: number;
  totalPrice: number;
  status: string;
  paymentStatus: string;
}

// Token types
export interface VerificationTokenResponse {
  identifier: string;
  token: string;
  expires: Date;
}
