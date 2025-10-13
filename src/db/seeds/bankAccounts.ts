import { db } from '@/db';
import { bankAccounts } from '@/db/schema';

async function main() {
    const sampleBankAccounts = [
        {
            bankName: 'BCA', // PLACEHOLDER: Replace with your actual bank name
            accountNumber: '1234567890', // PLACEHOLDER: Replace with your actual BCA account number
            accountHolder: 'PT Your Company Name', // PLACEHOLDER: Replace with your company/account holder name
            isActive: true,
            createdAt: new Date().toISOString(),
        },
        {
            bankName: 'Mandiri', // PLACEHOLDER: Replace with your actual bank name
            accountNumber: '0987654321', // PLACEHOLDER: Replace with your actual Mandiri account number
            accountHolder: 'PT Your Company Name', // PLACEHOLDER: Replace with your company/account holder name
            isActive: true,
            createdAt: new Date().toISOString(),
        },
        {
            bankName: 'BNI', // PLACEHOLDER: Replace with your actual bank name
            accountNumber: '5678901234', // PLACEHOLDER: Replace with your actual BNI account number
            accountHolder: 'PT Your Company Name', // PLACEHOLDER: Replace with your company/account holder name
            isActive: true,
            createdAt: new Date().toISOString(),
        }
    ];

    await db.insert(bankAccounts).values(sampleBankAccounts);
    
    console.log('✅ Bank accounts seeder completed successfully');
}

main().catch((error) => {
    console.error('❌ Seeder failed:', error);
});