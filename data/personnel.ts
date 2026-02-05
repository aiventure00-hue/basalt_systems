export interface Person {
    id: string;
    role: string;
    name: string;
    description: string;
    avatar: string;
}

export const personnel: Person[] = [
    {
        id: "person1",
        role: "LEAD_ARCHITECT",
        name: "V. Korsakov",
        description: "Former systems lead at CyberDyne. 15 years designing autonomous fail-safe protocols.",
        avatar: "https://storage.googleapis.com/banani-avatars/avatar%2Fmale%2F35-50%2FEuropean%2F2"
    },
    {
        id: "person2", 
        role: "OPERATIONS_DIR",
        name: "J. Chen",
        description: "Specialist in high-frequency trading algorithms. Optimizes logic for nanosecond efficiency.",
        avatar: "https://storage.googleapis.com/banani-avatars/avatar%2Ffemale%2F25-35%2FEast%20Asian%2F3"
    },
    {
        id: "person3",
        role: "SYSTEMS_SECURITY", 
        name: "A. Bishop",
        description: "20 years infrastructure hardening. Ensures client automations are impenetrable.",
        avatar: "https://storage.googleapis.com/banani-avatars/avatar%2Fmale%2F50-65%2FNorth%20American%2F1"
    }
]
