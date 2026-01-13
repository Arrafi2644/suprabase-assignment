
const CommonLayout = async ({ children }: { children: React.ReactNode }) => {

    return (
        <div className="bg-[#0F172A]">
            <main className="min-h-dvh">
                {children}
            </main>
        </div>
    );
};

export default CommonLayout;