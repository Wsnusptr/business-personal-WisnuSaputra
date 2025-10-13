CREATE TABLE `bank_accounts` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`bank_name` text NOT NULL,
	`account_number` text NOT NULL,
	`account_holder` text NOT NULL,
	`is_active` integer DEFAULT true NOT NULL,
	`created_at` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `orders` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`customer_name` text NOT NULL,
	`customer_email` text NOT NULL,
	`customer_phone` text NOT NULL,
	`package_type` text NOT NULL,
	`package_name` text NOT NULL,
	`package_price` integer NOT NULL,
	`additional_notes` text,
	`order_status` text DEFAULT 'pending_payment' NOT NULL,
	`created_at` text NOT NULL,
	`updated_at` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `payments` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`order_id` integer NOT NULL,
	`payment_proof_url` text NOT NULL,
	`bank_name` text NOT NULL,
	`transfer_date` text NOT NULL,
	`transfer_amount` integer NOT NULL,
	`payment_status` text DEFAULT 'pending' NOT NULL,
	`admin_notes` text,
	`verified_at` text,
	`verified_by` text,
	`created_at` text NOT NULL,
	`updated_at` text NOT NULL,
	FOREIGN KEY (`order_id`) REFERENCES `orders`(`id`) ON UPDATE no action ON DELETE no action
);
