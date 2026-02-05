export interface Value {
    id: string;
    icon: string;
    title: string;
    description: string;
}

export const values: Value[] = [
    {
        id: "value1",
        icon: "lucide:diamond",
        title: "Stability First",
        description: "We prioritize uptime over features. A system that breaks is a liability, not an asset."
    },
    {
        id: "value2",
        icon: "lucide:zap", 
        title: "Velocity",
        description: "Speed is a function of clean architecture. We remove friction to maximize throughput."
    },
    {
        id: "value3",
        icon: "lucide:shield-check",
        title: "Security", 
        description: "Data integrity is non-negotiable. Our protocols are hardened against external threats."
    },
    {
        id: "value4",
        icon: "lucide:scale",
        title: "Precision",
        description: "We measure twice, cut once. Every automation is audited for 99.9% accuracy."
    }
]
